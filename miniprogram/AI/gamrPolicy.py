import random
import numpy as np
import keras
from collections import deque
from keras.models import Model
from keras.layers import Input, Dense
from keras.optimizer_v2.adam import Adam

import cardGame
import cardGame as card
import os
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
def our_network():
    Inputs = Input(shape=(20,))
    X = Dense(24, activation='relu')(Inputs)
    X = Dense(24, activation='relu')(X)
    X = Dense(5)(X)

    model = Model(inputs=Inputs, outputs=X)
    model.compile(loss='mse',optimizer=Adam(learning_rate=0.001))
    return model
def Replay(action_size, state_size, batch_size, Memory, model, gamma):
    print('fit one time')
    minibatch = random.sample(Memory, batch_size)
    States = np.empty((batch_size, state_size))
    Labels = np.empty((batch_size, action_size))
    i = 0
    for state, action, reward, next_state, done in minibatch:

        if not done:
            target = reward + gamma * np.amax(model.predict(next_state)[0])
        else:
            target = reward

        label = model.predict(state)
        label[0][action] = target
        States[i, :] = state
        Labels[i, :] = label
        i += 1
    model.fit(States, Labels, epochs=1, verbose=0)
    # Train the model with each state in the minibatch

    return model
def our_train_network(Episodes=100, batch_size=1800):
    gamma = 0.95
    epsilon = 0.1
    done = False
    Memory = deque(maxlen=2000)
    game = card.Game_State()
    model = our_network()
    weights_path = './weight.h5'
    try:
        model.load_weights(weights_path)
        print("load weights succeed")
    except OSError:
        print("no weights found")

    for e in range(Episodes):
        game = card.Game_State()
        state = np.reshape(game.data,[1,20])
        score = 0
        for time in range(1000):
            state = np.reshape(game.data, [1, 20])
            action = Act(state, epsilon, model)
            epsilon = Epsilon_Update(epsilon)
            next_state,reward,done = game.Frame_Step(action)
            score+=reward
            next_state = np.reshape(next_state,[1,20])
            Memory = Remember(Memory, state, action, reward, next_state, done)
            state = next_state
            if done:
                print("episode: {}/{}, score: {}, epsilon: {:.2}".format(e, Episodes, score, epsilon))
                print(state)
                # define the score as the number of actions taken
                break
            if len(Memory) > batch_size:
                model = Replay(5, 20, batch_size, Memory, model, gamma)
                Memory = deque(maxlen=2000)
            # train the model after the Memory is enough
    model.save_weights(weights_path)
    print('weights saved after {} episode'.format(e))
    # save the model
    return

def Remember(Memory, state, action, reward, next_state, done):
    Memory.append((state, action, reward, next_state, done))
    return Memory

def Epsilon_Update(epsilon, epsilon_min=0.01, epsilon_decay=0.995):
    if epsilon > epsilon_min:
        epsilon *= epsilon_decay

    return epsilon
def Act(state, epsilon, model):
    s=0
    for i in state[0][0:4]:
        s+=i
    if s==0:
        return 0
    if np.random.rand()<=epsilon:
        act =  random.randrange(0,5)
        if act != 0:
            while state[0][act-1]<=0:
                act=random.randrange(1,5)

        return act
    act_values = model.predict(state)
    act = np.argmax(act_values[0])
    if act != 0 and state[0][act-1]<=0:
        return 0
    return np.argmax(act_values[0])

def AI_main():
    """需要传入一个矩阵的值，还是json传入，按顺序，然后我这边手动填充矩阵
    需要传入
    玩家1 的  红桃 黑桃 方片 梅花 的数量
    玩家2 的  红桃 黑桃 方片 梅花 的数量
    牌堆 的  红桃 黑桃 方片 梅花 的数量
    放置区 的  红桃 黑桃 方片 梅花 的数量
    放置区 的 堆顶（红桃传1，黑桃传2，方片传3，梅花传4）以及（1，2，3，4）之间任选一个（可以采用随机方法）
    即需要传入以下数据，所有数据都是int，其中第五行的数据范围为（1，2，3，4）
    player1_hongtao,player1_heitao,player1_fangpian,player1_meihua
    player2_hongtao,player2_heitao,player2_fangpian,player2_meihua
    paidui_hongtao,paidui_heitao,paidui_fangpian,paidui_meihua
    set_hongtao,set_heitao,set_fangpian,set_meihua
    set_top, set_random
                   红桃 黑桃 方片 梅花
    玩家1
    玩家2
    棋局牌库
    棋牌牌库
    弃牌堆顶和随机


    """
    req_data = request.get_json()  # 解析获得的json文件
    model = our_network()
    weights_path = './weight.h5'
    game = card.Game_State()
    try:
        model.load_weights(weights_path)
        print("load weights succeed")
    except OSError:
        print("no weights found")
    rotax = np.zeros((5,4))
    rotax[0][0] = req_data.get("player1_hongtao")
    rotax[0][1] = req_data.get("player1_heitao")
    rotax[0][2] = req_data.get("player1_fangpian")
    rotax[0][3] = req_data.get("player1_meihua")

    rotax[1][0] = req_data.get("player2_hongtao")
    rotax[1][1] = req_data.get("player2_heitao")
    rotax[1][2] = req_data.get("player2_fangpian")
    rotax[1][3] = req_data.get("player2_meihua")

    rotax[2][0] = req_data.get("paidui_hongtao")
    rotax[2][1] = req_data.get("paidui_heitao")
    rotax[2][2] = req_data.get("paidui_fangpian")
    rotax[2][3] = req_data.get("paidui_meihua")

    rotax[3][0] = req_data.get("paidui_hongtao")
    rotax[3][1] = req_data.get("paidui_heitao")
    rotax[3][2] = req_data.get("paidui_fangpian")
    rotax[3][3] = req_data.get("paidui_meihua")

    rotax[4][0] = req_data.get("set_top")
    rotax[4][1] = req_data.get("set_top")
    rotax[4][2] = 0
    rotax[4][3] = 0

    act = model.predict(np.reshape(rotax, [1, 20]))

    exit(0)

