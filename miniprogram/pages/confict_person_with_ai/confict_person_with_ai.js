// pages/confict_noline/confict_noline.js
Page({
  data: {
    top_card: null,
    player: "玩家一",
    isStarted: false,
    now_index: 0,
    get_pork_block: true,
    Gaming: false,
    get_pork_set: [],
    set_pork_block: false,
    set_pork_set: [],
    now_value: null,
    last_value: null,
    now_pork: [],
    top_card: [],
    winner: null,
    get_pork_black_peach_count: 13,
    get_pork_red_heart_count: 13,
    get_pork_black_flower_count: 13,
    get_pork_red_block_count: 13,
    player1_black_peach_count: 0,
    player1_red_heart_count: 0,
    player1_black_flower_count: 0,
    player1_red_block_count: 0,
    player2_black_peach_count: 0,
    player2_red_heart_count: 0,
    player2_black_flower_count: 0,
    player2_red_block_count: 0,
    player_black_peach_count: 0,
    player_red_heart_count: 0,
    player_black_flower_count: 0,
    player_red_block_count: 0,
    player_black_peach: [],
    player_red_heart: [],
    player_black_flower: [],
    player_red_block: [],
    back_pork: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_53.png",
    pork_set: [{
        value: 1,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_1.png"
      },
      {
        value: 2,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_2.png"
      },
      {
        value: 3,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_3.png"
      },
      {
        value: 4,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_4.png"
      },
      {
        value: 5,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_5.png"
      },
      {
        value: 6,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_6.png"
      },
      {
        value: 7,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_7.png"
      },
      {
        value: 8,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_8.png"
      },
      {
        value: 9,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_9.png"
      },
      {
        value: 10,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_10.png"
      },
      {
        value: 11,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_11.png"
      },
      {
        value: 12,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_12.png"
      },
      {
        value: 13,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_13.png"
      },
      {
        value: 14,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_14.png"
      },
      {
        value: 15,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_15.png"
      },
      {
        value: 16,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_16.png"
      },
      {
        value: 17,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_17.png"
      },
      {
        value: 18,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_18.png"
      },
      {
        value: 19,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_19.png"
      },
      {
        value: 20,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_20.png"
      },
      {
        value: 21,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_21.png"
      },
      {
        value: 22,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_22.png"
      },
      {
        value: 23,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_23.png"
      },
      {
        value: 24,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_24.png"
      },
      {
        value: 25,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_25.png"
      },
      {
        value: 26,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_26.png"
      },
      {
        value: 27,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_27.png"
      },
      {
        value: 28,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_28.png"
      },
      {
        value: 29,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_29.png"
      },
      {
        value: 30,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_30.png"
      },
      {
        value: 31,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_31.png"
      },
      {
        value: 32,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_32.png"
      },
      {
        value: 33,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_33.png"
      },
      {
        value: 34,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_34.png"
      },
      {
        value: 35,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_35.png"
      },
      {
        value: 36,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_36.png"
      },
      {
        value: 37,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_37.png"
      },
      {
        value: 38,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_38.png"
      },
      {
        value: 39,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_39.png"
      },
      {
        value: 40,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_40.png"
      },
      {
        value: 41,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_41.png"
      },
      {
        value: 42,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_42.png"
      },
      {
        value: 43,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_43.png"
      },
      {
        value: 44,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_44.png"
      },
      {
        value: 45,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_45.png"
      },
      {
        value: 46,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_46.png"
      },
      {
        value: 47,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_47.png"
      },
      {
        value: 48,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_48.png"
      },
      {
        value: 49,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_49.png"
      },
      {
        value: 50,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_50.png"
      },
      {
        value: 51,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_51.png"
      },
      {
        value: 52,
        image_Util: "cloud://pig-end-7gjiedyf4997574e.7069-pig-end-7gjiedyf4997574e-1307703420/pork_image/0_52.png"
      },
    ],
    player_card_black_peach: [],
    player_card_red_heart: [],
    player_card_black_flower: [],
    player_card_red_block: [],
    player1_card_black_peach: [

    ],
    player1_card_red_heart: [

    ],
    player1_card_black_flower: [

    ],
    player1_card_red_block: [

    ],
    player2_card_black_peach: [

    ],
    player2_card_red_heart: [

    ],
    player2_card_black_flower: [

    ],
    player2_card_red_block: [

    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const self = this;
    wx.loadFontFace({
      family: 'my_font',
      source: 'url("https://7069-pig-end-7gjiedyf4997574e-1307703420.tcb.qcloud.la/%E5%AD%97%E4%BD%93/FZquanfuti--GB1-0.ttf?sign=7265e93d90fd59f76225cc1b5e4cce32&t=1633934941")',
      success(res) {
        console.log(res.status)
        self.setData({
          loaded: true
        })
      },
      fail: function (res) {
        console.log(res.status)
      },
      complete: function (res) {
        console.log(res.status)
      }
    });
  },

  StartGame: function () {
    this.setData({
      get_pork_set: this.data.pork_set,
      isStarted: true,
      Gaming: true,
      now_pork: this.data.get_pork_set.pop()
    })
    this.data.get_pork_set.sort(function () {
      return .5 - Math.random();
    });
  },

  toNext_1: function () {
    this.data.last_value = this.data.now_value;
    this.data.now_index += 1;
    this.data.now_pork = this.data.get_pork_set.pop();
    switch (Math.floor((this.data.now_pork.value - 1) / 13)) {
      case 0:
        this.setData({
          get_pork_black_peach_count: this.data.get_pork_black_peach_count - 1,
        })
        break;
      case 1:
        this.setData({
          get_pork_red_heart_count: this.data.get_pork_red_heart_count - 1,
        })
        break;
      case 2:
        this.setData({
          get_pork_black_flower_count: this.data.get_pork_black_flower_count - 1,
        })
        break;
      default:
        this.setData({
          get_pork_red_block_count: this.data.get_pork_red_block_count - 1
        })
        break;
    };
    this.data.set_pork_set.push(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    console.log("last_value:" + this.data.last_value);
    console.log("now_value:" + this.data.now_value);
    if (this.data.now_index % 2 == 0) {
      if (Math.floor((this.data.now_value - 1) / 13) == Math.floor((this.data.last_value - 1) / 13)) {
        while (this.data.set_pork_set.length != 0) {
          pork_1 = this.data.set_pork_set.pop();
          console.log(pork_1);
          switch (Math.floor((pork_1.value - 1) / 13)) {
            case 0:
              this.setData({
                player_black_peach: pork_1
              })
              this.data.player1_card_black_peach.push(pork_1);
              break;
            case 1:
              this.setData({
                player_red_heart: pork_1
              })
              this.data.player1_card_red_heart.push(pork_1);
              break;
            case 2:
              this.setData({
                player_black_flower: pork_1
              })
              this.data.player1_card_black_flower.push(pork_1);
              break;
            default:
              this.setData({
                player_red_block: pork_1
              })
              this.data.player1_card_red_block.push(pork_1);
              break;
          }
        }
      }
    } else {
      if (Math.floor((this.data.now_value - 1) / 13) == Math.floor((this.data.last_value - 1) / 13)) {
        while (this.data.set_pork_set.length != 0) {
          var pork_1 = [];
          pork_1 = this.data.set_pork_set.pop();
          console.log(pork_1);
          switch (Math.floor((pork_1.value - 1) / 13)) {
            case 0:
              this.setData({
                player_black_peach: pork_1
              })
              this.data.player2_card_black_peach.push(pork_1);
              break;
            case 1:
              this.setData({
                player_red_heart: pork_1
              })
              this.data.player2_card_red_heart.push(pork_1);
              break;
            case 2:
              this.setData({
                player_black_flower: pork_1
              })
              this.data.player2_card_black_flower.push(pork_1);
              break;
            default:
              this.setData({
                player_red_block: pork_1
              })
              this.data.player2_card_red_block.push(pork_1);
              break;
          }
        }
      }
    }
    this.data.player1_black_peach_count = this.data.player1_card_black_peach.length;
    this.data.player1_red_heart_count = this.data.player1_card_red_heart.length;
    this.data.player1_black_flower_count = this.data.player1_card_black_flower.length;
    this.data.player1_red_block_count = this.data.player1_card_red_block.length;
    this.data.player2_black_peach_count = this.data.player2_card_black_peach.length;
    this.data.player2_red_heart_count = this.data.player2_card_red_heart.length;
    this.data.player2_black_flower_count = this.data.player2_card_black_flower.length;
    this.data.player2_red_block_count = this.data.player2_card_red_block.length;
    this.data.player_card_black_peach = this.data.now_index % 2 == 0 ? this.data.player1_card_black_peach : this.data.player2_card_black_peach;
    this.data.player_card_red_heart = this.data.now_index % 2 == 0 ? this.data.player1_card_red_heart : this.data.player2_card_red_heart;
    this.data.player_card_black_flower = this.data.now_index % 2 == 0 ? this.data.player1_card_black_flower : this.data.player2_card_black_flower;
    this.data.player_card_red_block = this.data.now_index % 2 == 0 ? this.data.player1_card_red_block : this.data.player2_card_red_block;
    if (this.data.get_pork_set.length == 0) {
      if ((this.data.player1_black_peach_count + this.data.player1_red_heart_count + this.data.player1_black_flower_count + this.data.player1_red_block_count) > (this.data.player2_black_peach_count + this.data.player2_red_heart_count + this.data.player2_black_flower_count + this.data.player2_red_block_count)) {
        this.setData({
          winner: "玩家二"
        })
      } else {
        this.setData({
          winner: "玩家一"
        })
      }
    }
    this.setData({
      player: this.data.now_index % 2 == 0 ? "玩家一" : "玩家二",
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      top_card: this.data.now_pork,
      player_black_peach_count: this.data.now_index % 2 == 0 ? this.data.player1_black_peach_count : this.data.player2_black_peach_count,
      player_red_heart_count: this.data.now_index % 2 == 0 ? this.data.player1_red_heart_count : this.data.player2_red_heart_count,
      player_black_flower_count: this.data.now_index % 2 == 0 ? this.data.player1_black_flower_count : this.data.player2_black_flower_count,
      player_red_block_count: this.data.now_index % 2 == 0 ? this.data.player1_red_block_count : this.data.player2_red_block_count,
      Gaming: this.data.get_pork_set.length == 0 ? false : true,
    });
    if (this.data.get_pork_set.length == 0) {
      this.setData({
        get_pork_block: true
      })
    }

  },

  toHome: function () {
    wx.reLaunch({
      url: '../home/home',
    })
  },

  StartGameAgin: function () {
    wx.reLaunch({
      url: '../confict_noline/confict_noline',
    })
  }
})