// pages/formerexam/formerexam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [
      {
        "id": 1,
        "type": "算法",
        "iconSrc": "/images/subjecType/0.png"
      },
      {
        "id": 2,
        "type": "数学",
        "iconSrc": "/images/subjecType/1.png"
      },
      {
        "id": 3,
        "type": "政治",
        "iconSrc": "/images/subjecType/2.png"
      },
      {
        "id": 4,
        "type": "数据库",
        "iconSrc": "/images/subjecType/3.png"
      },
      {
        "id": 5,
        "type": "计组",
        "iconSrc": "/images/subjecType/5.png"
      },
      {
        "id": 6,
        "type": "英语",
        "iconSrc": "/images/subjecType/4.png"
      },
    ]
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

  },

  //搜索框点击跳转函数
  onClick: function (e) {
    wx.navigateTo({
      url: '/pages/search/search?type=question',
    })
  }


})