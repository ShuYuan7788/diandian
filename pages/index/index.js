//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isRegister: false,
  },
  //获取账号信息
  bindGetUserInfo: function (e) {
    console.log(e);
    if (e.detail.userInfo) {
      wx.navigateTo({
        url: '/pages/register/register'
      })
      var avatarUrl = e.detail.userInfo.avatarUrl;
      wx.setStorageSync("avatarUrl", avatarUrl);
      var that = this;
      that.setData({
        avatarUrl: avatarUrl
      });
      console.log(avatarUrl);
    } else {
      wx.navigateBack({

      })
    } 
  },   
  onDaily:function(e){
    wx.navigateTo({
      url: '/pages/dailyque/dailyque',
    })
  },
  onShow(){
    //初始化tabbar栏
    console.log('首页')
    this.getTabBar().init();
  },

  onLoad: function () {
  },
})
