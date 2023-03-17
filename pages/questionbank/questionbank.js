
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // tabber 栏选中索引(当前页面为1)
    active:1,
    //类型列表
    typeList:[
      {
        "id": 1,
        "type": "算法",
        "iconSrc":"/images/subjecType/0.png"
      },
      {
        "id": 2,
        "type": "数学",
        "iconSrc":"/images/subjecType/1.png"
      },
      {
        "id": 3,
        "type": "政治",
        "iconSrc":"/images/subjecType/2.png"
      },
      {
        "id": 4,
        "type": "数据库",
        "iconSrc":"/images/subjecType/3.png"
      },
      {
        "id": 5,
        "type": "计组",
        "iconSrc":"/images/subjecType/5.png"
      },
      {
        "id": 6,
        "type": "英语",
        "iconSrc":"/images/subjecType/4.png"
      },
    ]
  },
  //搜索框点击跳转函数
  onClick:function(e){
    wx.navigateTo({
      url: '/pages/search/search?type=question',
    })
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
    this.initTabbaer();
  },

  //初始化tabbar栏
  initTabbaer(){
    this.getTabBar().init();
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


})