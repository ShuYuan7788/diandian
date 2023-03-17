// pages/questionSolution/questionSolutionO.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    result:[],
    text:"",
    collectIcon:"award-o",
    myAnswerIcon:"orders-o",
    myAnswerShow:false,
    goodJob:"good-job-o",
    writeAnalysisShow:false,
    // 富文本编辑器
    formats: {},
    readOnly: false,
    placeholder: '开始输入...',
    keyboardHeight: 0,
    isIOS: false
    // 富文本编辑器
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  // 富文本编辑器
    const platform = wx.getSystemInfoSync().platform
    const isIOS = platform === 'ios'
    this.setData({isIOS})
    const that = this
    this.updatePosition(0)
    let keyboardHeight = 0
    wx.onKeyboardHeightChange(res => {
      if (res.height === keyboardHeight) return
      const duration = res.height > 0 ? res.duration * 1000 : 0
      keyboardHeight = res.height
      setTimeout(() => {
        wx.pageScrollTo({
          scrollTop: 0,
          success() {
            that.updatePosition(keyboardHeight)
            that.editorCtx.scrollIntoView()
          }
        })
      }, duration)
    })
  // 富文本编辑器
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
  // 富文本编辑器
  readOnlyChange() {
    this.setData({
      readOnly: !this.data.readOnly
    })
  },
  updatePosition(keyboardHeight) {
    const toolbarHeight = 50
    const { windowHeight, platform } = wx.getSystemInfoSync()
    let editorHeight = keyboardHeight > 0 ? (windowHeight - keyboardHeight - toolbarHeight) : windowHeight
    this.setData({ editorHeight, keyboardHeight })
  },
  calNavigationBarAndStatusBar() {
    const systemInfo = wx.getSystemInfoSync()
    const { statusBarHeight, platform } = systemInfo
    const isIOS = platform === 'ios'
    const navigationBarHeight = isIOS ? 44 : 48
    return statusBarHeight + navigationBarHeight
  },
  onEditorReady() {
    const that = this
    wx.createSelectorQuery().select('#editor').context(function (res) {
      that.editorCtx = res.context
    }).exec()
  },
  blur() {
    this.editorCtx.blur()
  },
  format(e) {
    let { name, value } = e.target.dataset
    if (!name) return
    // console.log('format', name, value)
    this.editorCtx.format(name, value)
  },
  onStatusChange(e) {
    const formats = e.detail
    this.setData({ formats })
  },
  insertDivider() {
    this.editorCtx.insertDivider({
      success: function () {
        console.log('insert divider success')
      }
    })
  },
  clear() {
    this.editorCtx.clear({
      success: function (res) {
        console.log("clear success")
      }
    })
  },
  removeFormat() {
    this.editorCtx.removeFormat()
  },
  insertDate() {
    const date = new Date()
    const formatDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`
    this.editorCtx.insertText({
      text: formatDate
    })
  },
  insertImage() {
    const that = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.editorCtx.insertImage({
          src: res.tempFilePaths[0],
          data: {
            id: 'abcd',
            role: 'god'
          },
          width: '80%',
          success: function () {
            console.log('insert image success')
          }
        })
      }
    })
  },
  // 富文本编辑器
  clickCollect:function(e){
    var that = this;
    var collectIcon = that.data.collectIcon;
    if(collectIcon == "award-o"){
      collectIcon = "award";
    }else{
      collectIcon = "award-o";
    }
    that.setData({
      collectIcon:collectIcon,
    })
  },
  clickMyAnswer:function(e){
    var that = this;
    that.setData({
      myAnswerShow:true,
    })
  },
  onTextChange:function(e){
    var that = this;
    console.log(e);
    that.setData({
      text:e.detail,
    })
  },
  onChoiceChange:function(e){
    var that = this;
    console.log(e);
    that.setData({
      result:e.detail,
    })
  },
  onJudgeChange:function(e){
    var that = this;
    console.log(e);
    that.setData({
      result:e.detail,
    })
  },
  CloseMyAnswerShow:function(e){
    var that = this;
    that.setData({
      myAnswerShow:false,
    })
  },
  clickgood:function(e){
    var that = this;
    var goodJob = that.data.goodJob;
    if(goodJob == "good-job-o"){
      goodJob = "good-job";
    }else{
      goodJob = "good-job-o";
    }
    that.setData({
      goodJob:goodJob
    })
  },
  clickWriteAnalysis:function(e){
    var that = this;
    that.setData({
      writeAnalysisShow:true,
    })
  },
  CloseMyAnalysisShow:function(e){
    var that = this;
    that.setData({
      writeAnalysisShow:false,
      keyboardHeight:0
    })
  }
})