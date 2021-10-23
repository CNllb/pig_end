from flask import jsonify, request, session

from model import app, User, Record, db
from datetime import datetime
import os
import gamrPolicy
"""
状态码 200 成功
状态码 400 失败
"""


@app.route("/index", methods=["GET"])
@app.route("/")
def hello_world():
    return "欢迎来到 欢乐猪尾巴！！"

# 用户注册 //
@app.route("/user/register", methods=["POST"])  # 使用微信登录注册新账号
def user_register():
    """
    可以理解为用户第一次登录
    需要获取以下信息
    昵称, 密码, ID, 性别, 头像
    :return:
    """
    req_data = request.get_json()  # 解析获得的json文件
    username = req_data.get("username")  # 从json文件中获得用户名
    password = req_data.get("password")  # 获得密码
    id = req_data.get("id")  # 游戏id
    gender = req_data.get("gender")  # 性别
    photo = req_data.get("photo")  # 头像

    user = User(username=username, password=password, gender=gender, id=id, photo=photo)  # 注册用户
    try:  # 注册用户
        db.session.add(user)
        db.session.commit()
        return jsonify(code=200, msg="注册用户成功")
    except Exception as e:  # 注册失败返回状态码和提示
        print(e)
        db.session.rollback()
        return jsonify(code=400, msg="注册失败")


# 用户登录 //
@app.route("/user/login", methods=["POST"])
def user_login():
    """"
    用户登录，至少要求提供username、password、id即可，其他可为空
    """
    req_data = request.get_json()  # 解析json格式的数据
    #  获取其中的各项数据
    username = req_data.get("username")
    password = req_data.get("password")
    id = req_data.get("id")  # 游戏id
    gender = req_data.get("gender")
    photo = req_data.get("photo")
    record = req_data.get("record")  # 战绩/记录

    if not all([username is not None, password is not None, id is not None]):  # 要求username、password、id一定要有
        return jsonify(code=400, msg="参数不完整")

    user = User.query.filter(User.id == id).first()  # 根据用户id寻找用户
    # 验证密码或用户是否存在
    if user is None or password != user.password:
        return jsonify(code=400, msg="账号或密码错误")

    session["user_name"] = username  # 验证成功的话接下来通过session标记用户登录状态
    session["user_id"] = user.id

    return jsonify(msg="登录成功")

# 检查用户登录状态 //
@app.route("/user/session", methods=["GET"])
def check_user_session():
    """根据session检查用户登录状态"""
    username = session.get("user_name")
    user_id = session.get("user_id")

    if username is not None:
        # 操作逻辑 数据库什么的
        return jsonify(username=username, user_id=user_id)
    else:
        return jsonify(msg="出错了，没登录")

# 用户退出登录 //
@app.route("/user/logout", methods=["GET"])
def user_logout():
    """解除session状态，退出登录"""
    session.clear()
    return jsonify(msg="成功退出登录!")


# 用户查看个人信息
@app.route("/user/personal_message", methods=["GET"])
def personal_message():
    """需要传入id，可以看到游戏记录"""
    user_id = session.get("user_id")
    if user_id is None:
        return jsonify(code=400, msg="请登录")
    user = User.query.get(user_id)
    if user is None:
        return jsonify(code=400, msg="用户不存在")
    user_messages = {}
    user_record = user.record
    user_messages["user.id"] = user.id
    user_messages["user.username"] = user.username
    user_messages["user.gender"] = user.gender
    # user_messages["user_record"] = user_record
    return jsonify(user_messages)

# 用户开始游戏
@app.route("/user/begin_game", methods=["POST"])
def user_begin_game():  # 相当于创建游戏历史记录
    """需要有自己的id, 对手的id, 以及游戏的类型"""
    # 先检查用户登录状态，有登录才能开始游戏
    user_id = session.get("user_id")
    if user_id is None:
        return jsonify(code=400, msg="请登录")
    user = User.query.get(user_id)
    if user is None:
        return jsonify(code=400, msg="用户不存在")

    req_data = request.get_json()
    game_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")  # 获取游戏开始时间
    enemy_id = req_data.get("enemy_id")  # 获取对手的id
    game_type = req_data.get("game_type")  # 获取游戏的类型
    record = Record(game_time=game_time, user_id=user_id, game_type=game_type, enemy_id=enemy_id)
    try:
        db.session.add(record)
        db.session.commit()
        return jsonify(code=200, msg="游戏开始成功")
    except Exception as e:
        print(e)
        db.session.rollback()
        return jsonify(code=400, msg="游戏开始失败")

@app.route("/user/game_over", methods=["POST"])
def game_over():
    """需要传入比赛开始时间game_time、游戏结果result"""
    req_data = request.get_json()
    result = req_data.get("result")
    game_time = req_data.get("game_time")
    if not all([result is not None, game_time is not None]):  # 这两个参数是必须传入的
        return jsonify(code=400, msg="参数不完整")
    tmp = Record.query.filter(Record.game_time == game_time).update({"result": result})  # 根据比赛时间定位到比赛记录，并更新比赛结果
    db.session.commit()
    return jsonify(code=200, msg="已保存游戏结果")

@app.route("/user/AI_main", methods=["POST"])
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
    gamrPolicy.AI_main()

if __name__ == '__main__':
    app.run(host="0.0.0.0",port=5050)
