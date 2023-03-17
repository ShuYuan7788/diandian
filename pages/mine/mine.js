// pages/mine/mine.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    animation0:'',
    animation1:'',
    animation2: '',
    animation3: '',
    animation4: '',
    animation5: '',
    animation6: '',
    animation7: '',
    animation8: '',
    animation9: '',
    animation10: '',
    animation11: '',
    animation12: '',
    animation13: '',
    animation14: '',
    animation15: '',
    backgroundUrl: "http://tk.geek52.cn//wallpaper/01.png",
    avatarUrl: '',
    isRegister: false,
    userInfo:'',
    avatarClick: 0,
    mask_situation:true,
    value:'',
    valueNumber:0,
    max:0,
    changeClick:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var isRegister = wx.getStorageSync("isRegister");
    var avatarUrl = wx.getStorageSync("avatarUrl");
    var userId = wx.getStorageSync('userId');
    wx.request({
      url: app.globalData.targetUrl+"users/"+userId,
      method:'GET',
      data:{},
      success:res =>{
        console.log(res);
        var userInfo = res.data.data;
        wx.setStorage({
          data: userInfo,
          key: 'userInfo',
        })
        wx.request({
          url: app.globalData.targetUrl+"questions/false",
          method: 'GET',
          data: {
            userId: userId
          },
          success: res => {
            var data = res.data.data;
            if(data.length != 0){
              var accuracy = (userInfo.questionCount - data.length)/userInfo.questionCount * 100;
              accuracy = accuracy.toFixed(2);
              var accuracy = accuracy + "%";
            }else{
              if(userInfo.questionCount == 0){
                var accuracy = 0;
              }else{
                var accuracy = 100;
              }
              var accuracy = accuracy + "%";
            }
            userInfo.accuracy = accuracy;
            that.setData({
              userInfo:userInfo,
            })
          }
        })
      }
    })
    that.setData({
      isRegister:isRegister,
      avatarUrl: avatarUrl,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    var showOne = that.showOne;
    showOne(); 
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  showOne:function(){
    var that = this;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    that.animation1 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation2 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation3 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation4 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation5 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation6 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation7 = wx.createAnimation({
      duration: 900,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 100,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation1.rotate(-220).translateY(40 / 750 * windowHeight).translateX(40 / 750 * windowWidth).scaleX(1).scaleY(1).step();
    that.animation2.rotate(-110).translateY(40 / 750 * windowHeight).translateX(100 / 750 * windowWidth).scaleX(1).scaleY(1).step();
    that.animation3.rotate(-180).translateY(-10 / 750 * windowHeight).translateX(-110 / 750 * windowWidth).scaleX(1).scaleY(1).step();
    that.animation4.rotate(-70).translateY(-120 / 750 * windowHeight).translateX(-90 / 750 * windowWidth).scaleX(1).scaleY(1).step();
    that.animation5.rotate(-140).translateY(80 / 750 * windowHeight).translateX(-270 / 750 * windowWidth).scaleX(1).scaleY(1).step();
    that.animation6.rotate(-90).translateY(-20 / 750 * windowHeight).translateX(-120 / 750 * windowWidth).scaleX(1).scaleY(1).step();
    that.animation7.opacity(1).step();
    that.setData({
      animation1: that.animation1.export(),
      animation2: that.animation2.export(),
      animation3: that.animation3.export(),
      animation4: that.animation4.export(),
      animation5: that.animation5.export(),
      animation6: that.animation6.export(),
      animation7: that.animation7.export(),
    })
  },
  showTwo:function(){
    var that = this;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    that.animation0 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 200,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation1 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      delay: 1000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation2 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      delay: 1000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation3 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      delay: 1000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation4 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      delay: 1000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation5 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      delay: 1000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation6 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      delay: 1000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation7 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 1100,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation8 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation9 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation10 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation11 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation12 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation13 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation14 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation15 = wx.createAnimation({
      duration: 500,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation1.rotate(-220).translateY(40 / 750 * windowHeight).translateX(40 / 750 * windowWidth).scaleX(1).scaleY(1).opacity(1).step();
    that.animation2.rotate(-110).translateY(40 / 750 * windowHeight).translateX(100 / 750 * windowWidth).scaleX(1).scaleY(1).opacity(1).step();
    that.animation3.rotate(-180).translateY(-10 / 750 * windowHeight).translateX(-110 / 750 * windowWidth).scaleX(1).scaleY(1).opacity(1).step();
    that.animation4.rotate(-70).translateY(-120 / 750 * windowHeight).translateX(-90 / 750 * windowWidth).scaleX(1).scaleY(1).opacity(1).step();
    that.animation5.rotate(-140).translateY(80 / 750 * windowHeight).translateX(-270 / 750 * windowWidth).scaleX(1).scaleY(1).opacity(1).step();
    that.animation6.rotate(-90).translateY(-20 / 750 * windowHeight).translateX(-120 / 750 * windowWidth).scaleX(1).scaleY(1).opacity(1).step();
    that.animation0.translateX(0).translateY(0).scaleX(1).scaleY(1).step();
    that.animation7.opacity(1).step();
    that.animation8.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.animation9.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.animation10.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.animation11.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.animation12.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.animation13.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.animation14.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.animation15.translateX(160 / 750 * windowWidth).opacity(0).step();
    that.setData({
      animation1: that.animation1.export(),
      animation2: that.animation2.export(),
      animation3: that.animation3.export(),
      animation4: that.animation4.export(),
      animation5: that.animation5.export(),
      animation6: that.animation6.export(),
      animation0: that.animation0.export(),
      animation7: that.animation7.export(),
      animation8: that.animation8.export(),
      animation9: that.animation9.export(),
      animation10: that.animation10.export(),
      animation11: that.animation11.export(),
      animation12: that.animation12.export(),
      animation13: that.animation13.export(),
      animation14: that.animation14.export(),
      animation15: that.animation15.export(),
      avatarClick: 0,
    })
  },
  hideOne:function(){
    var that = this;
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    // console.log(windowHeight);
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    if(windowHeight > 672){
      var screenHeight = wx.getSystemInfoSync().screenHeight;
      // console.log(screenHeight);
      var statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
      var tabBarHeight = screenHeight - windowHeight;
      // console.log(tabBarHeight);
      // console.log(statusBarHeight);
      windowHeight = windowHeight - statusBarHeight - tabBarHeight;
    }
    that.animation0 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 800,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation1 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation2 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation3 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation4 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation5 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'left top 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation6 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'right bottom 0',
      success: function (res) {
        console.log(res);
      }
    })
    that.animation7 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 100,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation8 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 1600,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation9 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 1800,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation10 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 2000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation11 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 2200,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation12 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 2400,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation13 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 2600,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation14 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 2800,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation15 = wx.createAnimation({
      duration: 800,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      delay: 3000,
      success: function (res) {
        console.log(res);
      }
    })
    that.animation1.rotate(0).translateX(0).translateY(0).scaleX(1).scaleY(1).opacity(0).step();
    that.animation2.rotate(0).translateX(0).translateY(0).scaleX(1).scaleY(1).opacity(0).step();
    that.animation3.rotate(0).translateX(0).translateY(0).scaleX(1).scaleY(1).opacity(0).step();
    that.animation4.rotate(0).translateX(0).translateY(0).scaleX(1).scaleY(1).opacity(0).step();
    that.animation5.rotate(0).translateX(0).translateY(0).scaleX(1).scaleY(1).opacity(0).step();
    that.animation6.rotate(0).translateX(0).translateY(0).scaleX(1).scaleY(1).opacity(0).step();
    that.animation0.translateX(-300 / 750 * windowWidth).translateY(-320 / 750 * windowHeight).scaleX(0.4).scaleY(0.4).step();
    that.animation7.opacity(0).step();
    that.animation8.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.animation9.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.animation10.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.animation11.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.animation12.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.animation13.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.animation14.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.animation15.translateX(75 / 750 * windowWidth).opacity(1).step();
    that.setData({
      animation1: that.animation1.export(),
      animation2: that.animation2.export(),
      animation3: that.animation3.export(),
      animation4: that.animation4.export(),
      animation5: that.animation5.export(),
      animation6: that.animation6.export(),
      animation0: that.animation0.export(),
      animation7: that.animation7.export(),
      animation8: that.animation8.export(),
      animation9: that.animation9.export(),
      animation10: that.animation10.export(),
      animation11: that.animation11.export(),
      animation12: that.animation12.export(),
      animation13: that.animation13.export(),
      animation14: that.animation14.export(),
      animation15: that.animation15.export(),
      avatarClick: 1,
    })
  },
  getToMyWrong:function(res){
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 0){
      wx.navigateTo({
        url: 'myWrong',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  getToMyCollection: function (res) {
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 0) {
      wx.navigateTo({
        url: 'collection',
        success: function (res) {},
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  getToMyPapers: function (res) {
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 0) {
      wx.navigateTo({
        url: 'myPapers',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  getToQuestion: function (res) {
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 0) {
      wx.navigateTo({
        url: 'question',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  getToRank: function (res) {
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 0) {
      wx.navigateTo({
        url: '/pages/ranking/ranking',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  getToMyLoveCollection: function (res) {
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 0) {
      wx.navigateTo({
        url: 'loveChoice',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    }
  },
  getUserInfo: function (res) {
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 0){
      var hideOne = that.hideOne;
      hideOne();
    }else{
      var showTwo = that.showTwo;
      showTwo();
    }
  },
  setValue:function(e){
    var that = this;
    var value = e.detail.value;
    var valueNumber = value.length;
    if(value.length == that.data.max){
      wx.showToast({
        title: '最多' + that.data.max+'个字',
        icon: "none",
        image: "/images/notice.png",
        duration: 1000
      })
    }
    that.setData({
      value:value,
      valueNumber: valueNumber,
    })
  },
  saveChange: function () {
    var that = this;
    var value = that.data.value;
    console.log(value);
    var changeClick = that.data.changeClick;
    var userId = wx.getStorageSync('userId');
    var userInfo = that.data.userInfo;
    if(changeClick == "nick"){
      if(value.length != 0 && value != userInfo.nick){
        wx.request({
          url: app.globalData.targetUrl + 'users',
          method: 'PUT',
          data: {
            userId: userId,
            nick: value
          },
          success: res => {
            console.log(res);
            if (res.data.code == 200) {
              wx.showToast({
                title: '修改成功',
                icon: "none",
                image: "/images/success.png",
                duration: 1500
              })
              // var userInfo = that.data.userInfo;
              userInfo.nick = value;
              // console.log(userInfo.sno);
              wx.setStorageSync('userInfo', userInfo);
              that.setData({
                userInfo: userInfo,
              })
            }
          }
        })
      }
      if(value.length == 0){
        wx.showToast({
          title: '昵称不能为空',
          icon: "none",
          image: "/images/notice.png",
          duration: 1000
        })
      }
    }
    if (changeClick == "motto") {
      if (value != userInfo.motto) {
        wx.request({
          url: app.globalData.targetUrl + 'users',
          method: 'PUT',
          data: {
            userId: userId,
            motto: value
          },
          success: res => {
            console.log(res);
            if (res.data.code == 200) {
              wx.showToast({
                title: '修改成功',
                icon: "none",
                image: "/images/success.png",
                duration: 1500
              })
              // var userInfo = that.data.userInfo;
              userInfo.motto = value;
              // console.log(userInfo.sno);
              wx.setStorageSync('userInfo', userInfo);
              that.setData({
                userInfo: userInfo,
              })
            }
          }
        })
      }
    }
    that.setData({
      value: '',
      mask_situation: true,
      max: 0,
      changeClick: "",
      valueNumber:0,
    })
  },
  cancelChange: function () {
    var that = this;
    that.setData({
      value: '',
      mask_situation: true,
      max: 0,
      changeClick: "",
      valueNumber: 0,
    })
  },
  clickNick:function(){
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 1) {
      var userInfo = that.data.userInfo;
      // wx.showToast({
      //   title: '最多25个字',
      //   icon: "none",
      //   image: "/images/notice.png",
      //   duration: 1500
      // })
      that.setData({
        mask_situation:false,
        max:25,
        changeClick:"nick",
        value:userInfo.nick,
      })
    }
  },
  clickMotto:function(){
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 1) {
      var userInfo = that.data.userInfo;
      // wx.showToast({
      //   title: '最多34个字',
      //   icon: "none",
      //   image: "/images/notice.png",
      //   duration: 1500
      // })
      var valueNumber;
      if (userInfo.motto != null){
        valueNumber = userInfo.motto.length;
      }else{
        valueNumber = 0;
      }
      that.setData({
        mask_situation: false,
        max: 34,
        changeClick: "motto",
        value: userInfo.motto,
        valueNumber:valueNumber,
      })
    }
  },
  clickCollege:function(){
    var that = this;
    var avatarClick = that.data.avatarClick;
    if (avatarClick == 1) {
      wx.showToast({
        title: '学院不能更改',
        icon: "none",
        image: "/images/notice.png",
        duration: 1000
      })
    }
  },
  onClearEvent:function(event){
    var that = this;
    console.log("ok");
    that.setData({
      value : "",
    })
  }
})