const util = require("../../request/util");

// pages/loading/loading.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isHide: true,
        student_id: "",
        password: "",
        isname: false,
        ispass: false,
        id_token: '',
        response: ''
    },
    onLoad: function () {
        var that = this;
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

    toLogin: function () {
        this.setData({
            isHide: false
        })
    },

    toLoading: function () {
        this.setData({
            isHide: true
        })
    },

    login: function (e) {
        var that = this;
        let formData = e.detail.value;
        this.setData({
            student_id:formData.student_id,
            password:formData.password
        })
        console.log(formData);
        if (that.data.student_id == "") {
          wx.showModal({
            title: "错误",
            content: "用户名不能为空"
          });
          that.isname = false;
        } else {
          that.isname = true;
        }
        if (that.data.password == "") {
          wx.showModal({
            title: "错误",
            content: "密码不能为空"
          });
          that.ispass = false;
        } else {
          that.ispass = true;
        }
        if (that.ispass && that.isname){
            wx.request({
                url: 'http://172.17.173.97:8080/api/user/login',
                header:{
                    "Content-Type":"application/x-www-form-urlencoded"
                },
                data: formData,
                method: "POST",
                success: function (res) {
                    that.setData({
                        id_token: res.data.data.token,
                        response: res
                    }),
                    wx.setStorageSync('id_token', that.data.id_token),
                    wx.navigateTo({
                        url: '../../pages/home/home',
                    })
                    console.log(res.data);
                },
                fail: function (res) {
                    console.log(res.data);
                    console.log('is failed');
                    console.log('获取信息失败');
                }
            })
        }
       
    }
})