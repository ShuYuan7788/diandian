// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchvalue:"",
    placeholder:"题目名"

  },
  //搜索函数
  onSearch: function(e){
    var that=this;
    console.log(that.data.value);
  },
  onChange: function(e){

  },
  //点击返回上一页
  onClick:function(e){
    wx.navigateBack({});
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    console.log(options);
    if(options.type=="question"){
      that.setData({
        placeholder:"题目名"
      })
    }else if(options.type=="exam"){
      that.setData({
        placeholder:"试卷名"
      })
    }
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