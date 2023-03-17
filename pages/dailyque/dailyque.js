// pages/dailyque/dailyque.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: 0,
    checked:[],
    isChecked:[false,false,false,false,false],
    isShow:false,
    checkRadio: 0,
    isAnswerd:false,
    style:[]
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

  onChange(event){
    var that = this;
    that.setData({
      radio:event.detail
    })
  },
  onFillEvent(e){
    
  },
  onCheckBoxChange(event){
    var that = this;
    var isChecked = that.data.isChecked;
    isChecked = [];
    for(let i = 0; i < event.detail.length; i++){
      isChecked[event.detail[i]] = true;
    }
    that.setData({
      checked:event.detail,
      isChecked : isChecked
    })
  },
  onCheckChange(e){
    var that = this;
    console.log(e.detail);
    that.setData({
      checkRadio : e.detail
    })
  },
  onSubmitEvent(event){
    var that = this;
    that.setData({
      isAnswerd:true
    })
  },
  onSubmitEvent(event){
    wx.navigateTo({
      url: 'completedailyqu',
    })
  }
})