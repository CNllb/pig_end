// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded:false
  },

  onLoad:function () {
    const self = this;
    wx.loadFontFace({
      family: 'my_font',
      source: 'url("https://7069-pig-end-7gjiedyf4997574e-1307703420.tcb.qcloud.la/%E5%AD%97%E4%BD%93/FZquanfuti--GB1-0.ttf?sign=7265e93d90fd59f76225cc1b5e4cce32&t=1633934941")',
      success(res) {
        console.log(res.status)
        self.setData({ loaded: true })
      },
      fail: function(res) {
        console.log(res.status)
      },
      complete: function(res) {
       console.log(res.status)
      }
    });
  },

  toSetting:function () {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },

  toMyInfo:function () {
    wx.navigateTo({
      url: '../userinfo/userinfo',
    })
  },

  toDetail:function () {
    wx.navigateTo({
      url: '../detail/detail',
    })
  },

  toConfictNoline:function () {
    wx.navigateTo({
      url: '../confict_noline/confict_noline',
    })
  },

  toClassic:function () {
    wx.navigateTo({
      url: '../confict_classic/confict_classic',
    })
  },
  
  toPersonWithAi:function () {
    wx.navigateTo({
      url: '../confict_person_with_ai/confict_person_with_ai',
    })
  },

  toAiWithAi:function () {
    wx.navigateTo({
      url: '../confict_ai_with_ai/confict_ai_with_ai',
    })
  }
})