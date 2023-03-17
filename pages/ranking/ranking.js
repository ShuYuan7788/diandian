// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value:0,
    option:[
      {text:"算法",value:0},
      {text:"高数",value:1},
      {text:"毛概",value:2},
      {text:"数据库",value:3},
      {text:"计组",value:4}
    ],
    userInfo:{
      nick:"lee",
      avatarUrl:"/pages/mine/images/avatar.png",
      questionCount:10
    },//个人信息
    myNumber:0,//我的做题数
    myRank:1,//我的名次
    rankHeight:378
  },
  onClickLeft:function(e){
    wx.navigateBack({});
  },
  //跳转到我的页面
  onToMine:function(e){
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
  },
  selectTap() {
    this.setData({
      selectShow: !this.data.selectShow
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})