import numpy as np
import random
import math


class Game_State:
    Role = 0

    def __init__(self):
        # 五行四列 玩家 对手 棋局 弃牌堆 弃牌堆顶和次堆顶  1红桃 2黑桃 3方片 4梅花
        self.data = np.array([[0, 0, 0, 0], [0, 0, 0, 0], [13, 13, 13, 13], [0, 0, 0, 0], [-1, -2, 0, 0]])

    def Frame_Step(self, Input_Actions):
        terminal = False
        reward = 0.05
        if Input_Actions == 0:  # 抽牌(0)
            self.Swap_Top_Two()
            self.Drew_One_Card()
            reward+=0.05

        if Input_Actions == 1:  # 放红桃(1)
            self.Swap_Top_Two()
            if self.data[0][0]<=0:
                reward=-100
                print("出错了")
                return self.data,reward,True
            self.data[0][0] -= 1
            self.data[3][0] += 1
            self.data[4][0] = 1

        if Input_Actions == 2:  # 放黑桃(2)
            self.Swap_Top_Two()
            if self.data[0][1] <= 0:
                reward = -100
                print("出错了")
                return self.data, reward, True
            self.data[0][1] -= 1
            self.data[3][1] += 1
            self.data[4][0] = 2
        if Input_Actions == 3:  # 放方片(3)
            self.Swap_Top_Two()
            if self.data[0][2] <= 0:
                reward = -100
                print("出错了")
                return self.data, reward, True
            self.data[0][2] -= 1
            self.data[3][2] += 1
            self.data[4][0] = 3
        if Input_Actions == 4:  # 放梅花(4)
            self.Swap_Top_Two()
            if self.data[0][3] <= 0:
                reward = -100
                print("出错了",self.data)
                return self.data, reward, True
            self.data[0][3] -= 1
            self.data[3][3] += 1
            self.data[4][0] = 4

        if self.Check_Top_Two():
            self.get_all_card()

        if self.Is_Terminal():
            terminal = True
            rop=1
            if self.Role ==1:
                rop=1
            if np.sum(self.data[0]) > np.sum(self.data[1]):
                print("lose")
                reward += -101*rop
                reward -= (np.sum(self.data[0])-np.sum(self.data[1]))*7
            elif np.sum(self.data[0]) == np.sum(self.data[1]):
                print("sound")
                reward += 65
            else:
                print("win")
                reward += 101*rop
                reward-=(np.sum(self.data[0])-np.sum(self.data[1]))*7
            return self.data, reward, terminal
        else:
            if np.sum(self.data[2]) > 26 and np.sum(self.data[0]) > np.sum(self.data[1]):
                reward += -0.1
            if np.sum(self.data[2]) < 26:
                if np.sum(self.data[0]) < np.sum(self.data[1]):
                    reward += 0.1
                if self.data[4][0] >= 0 and self.data[2][self.data[4][0] - 1] > self.data[1][self.data[4][0]-1]:
                    reward += 0.1
        self.Change_Role()
        #print("_________________________________*****_____________________________")
        datRe = self.data.copy()
        self.data[[0,1],:]= self.data[[1,0],:]
        return datRe, reward, terminal

    def Is_Terminal(self):
        if np.sum(self.data[2]) == 0:
            return True
        return False

    def Drew_One_Card(self):
        card = random.randrange(0, 4)

        while self.data[2][card] <= 0:
            card = random.randrange(0, 4)
        self.data[3][card] += 1
        self.data[2][card] -= 1
        self.data[4][0] = card+1

        # print("_______________")
        # print("抽了 --- ",card+1,"----")
        # print(self.data)
        # print("_______________")

    def Check_Top_Two(self):
        if self.data[4][0] == self.data[4][1]:
            return True
        return False

    def Swap_Top_Two(self):
        self.data[4][1] = self.data[4][0]

    def Change_Role(self):
        self.Role += 1
        self.Role %= 2

    def get_all_card(self):
        # print(self.role,"   获得了所有牌")
        self.data[0][0] += self.data[3][0]
        self.data[0][1] += self.data[3][1]
        self.data[0][2] += self.data[3][2]
        self.data[0][3] += self.data[3][3]
        self.data[3][0] = 0
        self.data[3][1] = 0
        self.data[3][2] = 0
        self.data[3][3] = 0
        self.data[4][0] = -1
        self.data[4][1] = -2
        # print("获得后")
        # print(self.data)