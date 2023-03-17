// pages/simulation/overview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //显示跳转栏
    showNav:false,
    //跳转id
    scrollIntoId:""
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

  //开启弹出层
  onNav(){
    this.setData({ showNav: true });
  },
  //关闭弹出层
  onCloseNav(){
    this.setData({ showNav: false });
  },
  //跳转
  onClickNav(e){
    let scrollIntoId = e.currentTarget.dataset.id;
    this.setData({
      scrollIntoId,
      showNav:false
    })
  }
})