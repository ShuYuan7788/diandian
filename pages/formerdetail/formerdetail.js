// pages/formerdetail/formerdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:0,
    yearMenu: [
      { text: '全部', value: -1 },
      { text: '2020', value: '2020' },
      { text: '2019', value: '2019' },
      { text: '2018', value: '2018' },
      { text: '2017', value: '2017' },
      { text: '其它', value: 5 },
    ],
    value0: -1,
    examList:[
      {createdTime: "2020-04-01 21:43:26", examCount: 99, examId: 2, examScore: 100, examTime: 90, examTitle: "大学生高数竞赛真题", examType: 2, examYear: 2018},
      {createdTime: "2020-04-03 22:54:28", examCount: 667, examId: 4, examScore: 100, examTime: 120, examTitle: "大连市2019大学生高数竞赛", examType: 2, examYear: 2019}
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

  }
})