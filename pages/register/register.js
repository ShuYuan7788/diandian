var util = require('../../utils/util.js');
import Dialog from "../../miniprogram_npm/@vant/weapp/dialog/dialog";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    sno:"",
    nick:"",
    phone:"",
    sms:"",
    disabled: false, //是否可以点击
    sendColor:'#363636',//验证码按钮颜色
    sendTime:'获取验证码',
    snsMsgWait:60,//验证码时间
    show:false,//显示遮罩层
    isShow:false,//学院选项遮罩层
    college:"",//学院
    isChecked:false,//用户使用协议
    columns: ["计算机科学与工程学院","理学院","经济管理学院","机电工程学院","生命科学学院","外国语学院","设计学院","土木工程学院","文法学院","国际商学院","信息与通信工程学院","环境与资源学院","物理与材料工程学院","建筑学院","预科教育学院"],
  },

  //返回首页
  returnIndex:function(e){
    wx.switchTab({
      url: '/pages/index/index',
      complete: (res) => {},
      fail: (res) => {},
      success: (res) => {},
    })
  },
  //获取sno
  onSno:function(e){
    var that=this;
    console.log(e);
    wx.setStorageSync('sno', e.detail);
    that.setData({
      sno:e.detail
    })
  },
  //获取nick
  onNick:function(e){
    var that=this;
    wx.setStorageSync('nick', e.detail);
    that.setData({
      nick:e.detail
    })
  },
  //获取phone
  onPhone:function(e){
    var that=this;
    wx.setStorageSync('phone', e.detail);
    that.setData({
      phone:e.detail
    })
  },
  //获取sms
  onSms:function(e){
    var that=this;
    wx.setStorageSync('sms', e.detail);
    that.setData({
      sms:e.detail
    })
  },
  //选择学院
  onCollege:function(e){
    var isShow=true;
    var that=this;
    console.log(e);
    wx.setStorageSync('college', this.data.college);
    that.setData({
      isShow:isShow
    })
  },
  //关闭选择遮罩层
  onClose:function(e){
    var isShow=false;
    var that=this;
    that.setData({
      isShow:isShow
    })
  },
  //确认选择
  onConfirm(event) {
    this.setData({
      college:event.detail.value,
      isShow:false
    })
    wx.setStorageSync('college', this.data.college);
  },
  //更改选择
  onChange(picker, value, index) {
    this.setData({
      college:event.detail.value,
      isShow:false
    })
    wx.setStorageSync('college', this.data.college);
  },
  //关闭选择遮罩层
  onCancel() {
    var isShow=false;
    var that=this;
    that.setData({
      isShow:isShow
    })
  },
  //是否同意用户协议
  onChange:function(e){
    var that=this;
    that.setData({
      isChecked:e.detail
    })
    wx.setStorageSync('isChecked', that.data.isChecked);
  },
  //显示用户手册遮罩层
  onClickShow:function(e){
    console.log(this.data.show);
    var that=this;
    that.setData({
      show:true
    })
  },
  //关闭用户手册遮罩层
  onClickHide:function(e){
    var that=this;
    that.setData({
      show:false
    })
  },
  //发送验证码
  onSendEvent:function(e){
    console.log(this.data.sendTime);
    var inter = setInterval(function(){
      this.setData({
        smsFlag:true,
        sendColor:'#4cd1b0',
        sendTime:this.data.snsMsgWait+'秒后重发',
        snsMsgWait:this.data.snsMsgWait-1
      });
      if(this.data.snsMsgWait<0){
        clearInterval(inter);
        this.setData({
          smsFlag:false,
          sendColor:'#363636',
          sendTime:'获取验证码',
          snsMsgWait:60
        });
      }
    }.bind(this),1000);
  },
  //判断文本是否存在
  textRules:function(params){
    if(params!=""){
      return true;
    }else{
      return false;
    }
  },
  //判断手机号是否合法
  phoneRules:function(phone){
    if (phone.length >= 11) {
      phone = phone.substring(0, 11);
      var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]){1}|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/;
      if (myreg.test(phone)) {
        wx.setStorageSync("phone", phone);
        console.log("手机号合法");
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  },
  //注册
  onRegisterEvent:function(e){
    var that=this;
    var phone=that.data.phone;
    var sno=that.data.sno;
    var nick=that.data.nick;
    var college=that.data.college;
    var isChecked=that.data.isChecked;
    if(isChecked&&this.phoneRules(phone)&&this.textRules(sno)&&this.textRules(nick)&&this.textRules(college)){
      var times = 0;
      var i = setInterval(function() {
         times++;
         if (times >= 1.5) {
            that.setData({
              disabled: false,
            })
            clearInterval(i);
         } else {
            that.setData({
              disabled: true
            })
         }
      }, 1000)
      var dayTime = util.formatTime(new Date());
      console.log(dayTime);
    }else if(!this.textRules(sno)){
      Dialog({ message: '请输入学号' });
    }else if(!this.textRules(nick)){
      Dialog({ message: '请输入昵称' });
    }else if(!this.phoneRules(phone)){
      Dialog({ message: '请输入正确的手机号' });
    }else if(!this.textRules(college)){
      Dialog({ message: '请选择学院' });
    }else if(!this.textRules(sms)){
      Dialog({ message: '请输入验证码' });
    }else if(!isChecked){
      Dialog({ message: '请先同意用户协议' });
    }
    
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