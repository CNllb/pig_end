// pages/userinfo/userinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMineInfo:true,
    user_gender:0,
    user_city:null,
    user_win_counter:null,
    user_loser_counter:null,
    user_win_percent:null
  },

  toHome:function () {
    wx.navigateBack({
      url: '../home/home',
    })
  },

  toResult:function () {
    this.setData({
      showMineInfo:false
    })
  },

  toMineInfo:function () {
    this.setData({
      showMineInfo:true
    })
  }
})