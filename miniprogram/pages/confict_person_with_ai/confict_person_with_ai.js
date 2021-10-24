// pages/confict_noline/confict_noline.js
Page({
  data: {
    winner: "",
    player_1: "玩家",
    player_2: "AI",
    isStarted: false,
    now_value: null,
    last_value: null,
    now_index: 0,
    now_pork: null,
    Gaming: false,
    get_pork_set: [],
    set_pork_set: [],
    get_pork_block: true,
    set_pork_block: false,
    get_pork_black_peach_count: 13,
    get_pork_red_heart_count: 13,
    get_pork_black_flower_count: 13,
    get_pork_red_block_count: 13,
    player1_black_peach_count: 0,
    player1_red_heart_count: 0,
    player1_black_flower_count: 0,
    player1_red_block_count: 0,
    player1_black_peach: [],
    player1_red_heart: [],
    player1_black_flower: [],
    player1_red_block: [],
    player1_top_black_peach: null,
    player1_top_red_heart: null,
    player1_top_black_flower: null,
    player1_top_red_block: null,
    player2_black_peach_count: 0,
    player2_red_heart_count: 0,
    player2_black_flower_count: 0,
    player2_red_block_count: 0,
    player2_black_peach: [],
    player2_red_heart: [],
    player2_black_flower: [],
    player2_red_block: [],
    player2_top_black_peach: null,
    player2_top_red_heart: null,
    player2_top_black_flower: null,
    player2_top_red_block: null,
    AI_pork_set: [],
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

  },

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

  POP_Get_pork_2: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.get_pork_set.pop();
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork);
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
    that.check_card_2();
    that.check_winner();
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player2_black_peach_count: this.data.player2_black_peach.length,
      player2_red_heart_count: this.data.player2_red_heart.length,
      player2_black_flower_count: this.data.player2_black_flower.length,
      player2_red_block_count: this.data.player2_red_block.length,
    });
    that.set_top_card_2();
    if (this.data.get_pork_set.length == 0) {
      this.setData({
        get_pork_block: true
      })
    }
  },

  POP_Get_pork_1: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.get_pork_set.pop();
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
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
    that.check_card_1();
    that.check_winner();
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player1_black_peach_count: this.data.player1_black_peach.length,
      player1_red_heart_count: this.data.player1_red_heart.length,
      player1_black_flower_count: this.data.player1_black_flower.length,
      player1_red_block_count: this.data.player1_red_block.length
    });
    that.set_top_card_1()
    if (this.data.get_pork_set.length == 0) {
      this.setData({
        get_pork_block: true
      })
    };
    setTimeout(() => {
      // 延迟后操作
      that.selectWay()
    }, 2000)
  },

  toHome: function () {
    wx.reLaunch({
      url: '../home/home',
    })
  },

  StartGameAgin: function () {
    wx.reLaunch({
      url: '../confict_person_with_ai/confict_person_with_ai',
    })
  },

  check_card_1: function () {
    if (Math.floor((this.data.now_value - 1) / 13) == Math.floor((this.data.last_value - 1) / 13)) {
      while (this.data.set_pork_set.length != 0) {
        var pork_1 = this.data.set_pork_set.pop();
        switch (Math.floor((pork_1.value - 1) / 13)) {
          case 0:
            this.data.player1_black_peach.push(pork_1);
            break;
          case 1:
            this.data.player1_red_heart.push(pork_1);
            break;
          case 2:
            this.data.player1_black_flower.push(pork_1);
            break;
          default:
            this.data.player1_red_block.push(pork_1);
            break;
        }
      }
      this.data.last_value = null;
      this.data.now_value = null;
    }
  },

  check_card_2: function () {
    if (Math.floor((this.data.now_value - 1) / 13) == Math.floor((this.data.last_value - 1) / 13)) {
      while (this.data.set_pork_set.length != 0) {
        var pork_1 = this.data.set_pork_set.pop();
        switch (Math.floor((pork_1.value - 1) / 13)) {
          case 0:
            this.data.player2_black_peach.push(pork_1);
            this.data.AI_pork_set.push(pork_1)
            break;
          case 1:
            this.data.player2_red_heart.push(pork_1);
            this.data.AI_pork_set.push(pork_1)
            break;
          case 2:
            this.data.player2_black_flower.push(pork_1);
            this.data.AI_pork_set.push(pork_1)
            break;
          default:
            this.data.player2_red_block.push(pork_1);
            this.data.AI_pork_set.push(pork_1)
            break;
        }
      }
      this.data.last_value = null;
      this.data.now_value = null;
    }
  },

  set_top_card_1: function () {
    this.setData({
      player1_top_black_peach: this.data.player1_black_peach.pop(),
      player1_top_red_heart: this.data.player1_red_heart.pop(),
      player1_top_black_flower: this.data.player1_black_flower.pop(),
      player1_top_red_block: this.data.player1_red_block.pop()
    })
    if (this.data.player1_top_black_peach != null) {
      this.data.player1_black_peach.push(this.data.player1_top_black_peach)
    }
    if (this.data.player1_top_red_heart != null) {
      this.data.player1_red_heart.push(this.data.player1_top_red_heart)
    }
    if (this.data.player1_top_black_flower != null) {
      this.data.player1_black_flower.push(this.data.player1_top_black_flower)
    }
    if (this.data.player1_top_red_block != null) {
      this.data.player1_red_block.push(this.data.player1_top_red_block)
    }
  },

  set_top_card_2: function () {
    this.setData({
      player2_top_black_peach: this.data.player2_black_peach.pop(),
      player2_top_red_heart: this.data.player2_red_heart.pop(),
      player2_top_black_flower: this.data.player2_black_flower.pop(),
      player2_top_red_block: this.data.player2_red_block.pop()
    })
    if (this.data.player2_top_black_peach != null) {
      this.data.player2_black_peach.push(this.data.player2_top_black_peach)
    }
    if (this.data.player2_top_red_heart != null) {
      this.data.player2_red_heart.push(this.data.player2_top_red_heart)
    }
    if (this.data.player2_top_black_flower != null) {
      this.data.player2_black_flower.push(this.data.player2_top_black_flower)
    }
    if (this.data.player2_top_red_block != null) {
      this.data.player2_red_block.push(this.data.player2_top_red_block)
    }
  },

  player1_clicked_card_1: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player1_black_peach.pop();
    console.log(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_1()
    this.setData({
        now_pork: this.data.now_pork,
        now_index: (this.data.now_index + 1) % 2,
        set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
        get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
        player1_black_peach_count: this.data.player1_black_peach.length,
        player1_red_heart_count: this.data.player1_red_heart.length,
        player1_black_flower_count: this.data.player1_black_flower.length,
        player1_red_block_count: this.data.player1_red_block.length
      }),
      that.set_top_card_1(),
      setTimeout(() => {
        // 延迟后操作
        that.selectWay()
      }, 2000)
  },

  player1_clicked_card_2: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player1_red_heart.pop();
    console.log(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_1()
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player1_black_peach_count: this.data.player1_black_peach.length,
      player1_red_heart_count: this.data.player1_red_heart.length,
      player1_black_flower_count: this.data.player1_black_flower.length,
      player1_red_block_count: this.data.player1_red_block.length
    })
    that.set_top_card_1(),
    setTimeout(() => {
      // 延迟后操作
      that.selectWay()
    }, 2000)
  },

  player1_clicked_card_3: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player1_black_flower.pop();
    console.log(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_1()
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player1_black_peach_count: this.data.player1_black_peach.length,
      player1_red_heart_count: this.data.player1_red_heart.length,
      player1_black_flower_count: this.data.player1_black_flower.length,
      player1_red_block_count: this.data.player1_red_block.length
    })
    that.set_top_card_1(),
    setTimeout(() => {
      // 延迟后操作
      that.selectWay()
    }, 2000)
  },

  player1_clicked_card_4: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player1_red_block.pop();
    console.log(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_1()
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player1_black_peach_count: this.data.player1_black_peach.length,
      player1_red_heart_count: this.data.player1_red_heart.length,
      player1_black_flower_count: this.data.player1_black_flower.length,
      player1_red_block_count: this.data.player1_red_block.length
    })
    that.set_top_card_1(),
    setTimeout(() => {
      // 延迟后操作
      that.selectWay()
    }, 2000)
  },

  player2_clicked_card_1: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player2_black_peach.pop();
    console.log(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_2()
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player2_black_peach_count: this.data.player2_black_peach.length,
      player2_red_heart_count: this.data.player2_red_heart.length,
      player2_black_flower_count: this.data.player2_black_flower.length,
      player2_red_block_count: this.data.player2_red_block.length
    })
    that.set_top_card_2()
  },

  player2_clicked_card_2: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player2_red_heart.pop();
    console.log(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_2()
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player2_black_peach_count: this.data.player2_black_peach.length,
      player2_red_heart_count: this.data.player2_red_heart.length,
      player2_black_flower_count: this.data.player2_black_flower.length,
      player2_red_block_count: this.data.player2_red_block.length
    })
    that.set_top_card_2()
  },

  player2_clicked_card_3: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player2_black_flower.pop();
    console.log(this.data.now_pork);
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_2()
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player2_black_peach_count: this.data.player2_black_peach.length,
      player2_red_heart_count: this.data.player2_red_heart.length,
      player2_black_flower_count: this.data.player2_black_flower.length,
      player2_red_block_count: this.data.player2_red_block.length
    })
    that.set_top_card_2()
  },

  player2_clicked_card_4: function () {
    var that = this;
    this.data.last_value = this.data.now_value;
    this.data.now_pork = this.data.player2_red_block.pop();
    this.data.now_value = this.data.now_pork.value;
    this.data.set_pork_set.push(this.data.now_pork)
    that.check_card_2()
    this.setData({
      now_pork: this.data.now_pork,
      now_index: (this.data.now_index + 1) % 2,
      set_pork_block: this.data.set_pork_set.length == 0 ? false : true,
      get_pork_block: this.data.get_pork_set.length == 0 ? false : true,
      player2_black_peach_count: this.data.player2_black_peach.length,
      player2_red_heart_count: this.data.player2_red_heart.length,
      player2_black_flower_count: this.data.player2_black_flower.length,
      player2_red_block_count: this.data.player2_red_block.length
    })
    that.set_top_card_2()
  },

  check_winner: function () {
    if (this.data.get_pork_set.length == 0) {
      this.setData({
        Gaming: false
      })
      if (this.data.player1_black_peach_count + this.data.player1_red_heart_count + this.data.player1_black_flower_count + this.data.player1_red_block_count > this.data.player2_black_peach_count + this.data.player2_red_heart_count + this.data.player2_black_flower_count + this.data.player2_red_block_count) {
        this.setData({
          winner: this.data.player_2
        })
      } else {
        this.setData({
          winner: this.data.player_1
        })
      }
    }
  },

  selectWay: function () {
    var that = this;
    if (this.data.AI_pork_set.length == 0) {
      that.POP_Get_pork_2();
    } else {
      var temp = this.data.AI_pork_set.pop();
      this.setData({
        now_pork:temp
      })
      console.log(temp);
      switch (Math.floor((temp.value - 1) / 13)) {
        case 0:
          that.player2_clicked_card_1()
          break;
        case 1:
          that.player2_clicked_card_2()
          break;
        case 2:
          that.player2_clicked_card_3()
          break;
        default:
          that.player2_clicked_card_4()
          break;
      }
    }
  }

})