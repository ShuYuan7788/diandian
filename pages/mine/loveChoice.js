// pages/mine/loveChoice.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // backgroundUrl:"http://q7qb9fw7a.bkt.clouddn.com//wallpaper/wallpaper01.png",
    minusZ:19,
    minusTouch: 0,
    maskOne:false,
    maskTwo: true,
    plusLocation:{
      x:'',
      y:''
    },
    subject:[
      {
        id:0,
        title:"计组",
        current:0,
        src:"images/0.png",
        x:'',
        y:'',
        y1:''
      },
      {
        id: 1,
        title: "算法",
        current: 0,
        src: "images/1.png",
        x: '',
        y: '',
        y1: ''
      },
      {
        id: 2,
        title: "高数",
        current: 0,
        src: "images/2.png",
        x: '',
        y: '',
        y1: ''
      },
      {
        id: 3,
        title: "毛概",
        current: 0,
        src: "images/3.png",
        x: '',
        y: '',
        y1: ''
      },
      {
        id: 4,
        title: "数据库",
        current: 0,
        src: "images/4.png",
        x: '',
        y: '',
        y1: ''
      },
      {
        id: 5,
        title: "无",
        current: 0,
        src: "images/8.png",
        x: '',
        y: '',
        y1: ''
      },
      {
        id: 6,
        title: "无",
        current: 0,
        src: "images/8.png",
        x: '',
        y: '',
        y1: ''
      },
      {
        id: 7,
        title: "无",
        current: 0,
        src: "images/8.png",
        x: '',
        y: '',
        y1: ''
      },
      {
        id: 8,
        title: "无",
        current: 0,
        src: "images/8.png",
        x: '',
        y: '',
        y1: ''
      },
    ],
    currentLocation:{
      id:'',
      x:'',
      y:''
    },
    animationMoved:0,
    animation:'',
    animation1:'',
    chooseSubject:{
      count:0,
      id:[],
    },
    timeout:'',
    timeout1: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var subject = this.data.subject;
    // var questionTypeList = app.globalData.questionTypeList;
    var questionTypeList = wx.getStorageSync('questionTypeList');
    var animationMoved = this.data.animationMoved;
    var animation = this.data.animation;
    var chooseSubject = this.data.chooseSubject;
    if(questionTypeList.length != 0){
      var animation = wx.createAnimation({
        duration: 500,
        timingFunctionL: 'linear',
        transformOrigin: 'center center 0',
        success: function (res) {
          // console.log(res);
        }
      })
      animationMoved = 1;
      animation = animation;
      animation.rotate(45).step();
      this.setData({
        animation: animation.export(),
      })
    }
    // console.log(subject);
    // console.log(questionTypeList);
    for(var i=0; i<subject.length; i++){
      for(var j=0; j<questionTypeList.length; j++){
        if (subject[i].id == questionTypeList[j]){
          subject[i].current = 1;
          chooseSubject.count = chooseSubject.count + 1;
          chooseSubject.id.push(questionTypeList[j]);
        }
      }
    }
    var plusLocation = this.data.plusLocation;
    plusLocation.x = 245 / 750 * wx.getSystemInfoSync().screenWidth;
    plusLocation.y = 550 / 1500 * wx.getSystemInfoSync().windowHeight;
    // var page = this.data.page;
    // page.width = wx.getSystemInfoSync().screenWidth;
    // page.height = wx.getSystemInfoSync().windowHeight;
    var isFirst = wx.getStorageSync('isFirst');
    if(isFirst == 0 || !isFirst){
      var maskOne = true;
    }
    this.setData({
      // page:page,
      subject:subject,
      plusLocation:plusLocation,
      animationMoved: animationMoved,
      chooseSubject: chooseSubject,
      maskOne:maskOne
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var subject = this.data.subject;
    subject[0].x = 310 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[0].y = 200 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[0].y1 = 250 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[1].x = 120 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[1].y = 200 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[1].y1 = 250 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[2].x = 500 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[2].y = 200 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[2].y1 = 250 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[3].x = 10 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[3].y = 500 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[3].y1 = 500 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[4].x = 10 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[4].y = 780 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[4].y1 = 780 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[5].x = 210 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[5].y = 1000 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[5].y1 = 950 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[6].x = 410 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[6].y = 1000 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[6].y1 = 950 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[7].x = 640 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[7].y = 780 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[7].y1 = 780 / 1500 * wx.getSystemInfoSync().windowHeight;

    subject[8].x = 640 / 750 * wx.getSystemInfoSync().screenWidth;
    subject[8].y = 500 / 1500 * wx.getSystemInfoSync().windowHeight;
    subject[8].y1 = 500 / 1500 * wx.getSystemInfoSync().windowHeight;
    this.setData({
      subject:subject
    })
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
    // var questionTypeList = app.globalData.questionTypeList;
    var questionTypeList = wx.getStorageSync('questionTypeList');
    // var questionList = app.globalData.questionList;
    var questionIdList = wx.getStorageSync('questionIdList');
    // console.log(questionIdList);
    var chooseSubject = this.data.chooseSubject;
    var sno = wx.getStorageSync('sno');
    // console.log(chooseSubject);
    var add = {isAdd:1,id:[]};
    var minus = {isAdd:0,id:[]};
    for(var i=0;i<chooseSubject.id.length; i++){
      var count = 0;
        for(var j=0; j<questionTypeList.length; j++){
            if(chooseSubject.id[i] != questionTypeList[j]){
              count++;
            }
        }
        if(count == questionTypeList.length){
          add.id.push(+chooseSubject.id[i]);
        }
    }
    for (var i = 0; i < questionTypeList.length; i++) {
      var count = 0;
      for (var j = 0; j < chooseSubject.id.length; j++) {
        if (questionTypeList[i] != chooseSubject.id[j]) {
          count++;
        }
      }
      if (count == chooseSubject.id.length) {
        minus.id.push(+questionTypeList[i]);
      }
    }
    // console.log(add);
    // console.log(minus);
    if(add.id.length != 0){
      wx.request({
        url: app.globalData.targetUrl + "questions/updateOne",
        method: 'POST',
        data: {
          questionTypeList: add.id,
          sno: sno,
          isAdd:add.isAdd
        },
        success:res =>{
          console.log(res);
          questionIdList = res.data.data[0];
          wx.setStorageSync('questionIdList', questionIdList);
        }
      })
    }
    var timeout = setTimeout(function(){
      if (minus.id.length != 0) {
        wx.request({
          url: app.globalData.targetUrl + "questions/updateOne",
          method: 'POST',
          data: {
            questionTypeList: minus.id,
            sno: sno,
            isAdd: minus.isAdd
          },
          success: res => {
            console.log(res);
            questionIdList = res.data.data[0];
            wx.setStorageSync('questionIdList', questionIdList);
          }
        })
      }
    },700)
    // app.globalData.questionTypeList = chooseSubject.id;
    wx.setStorageSync('questionTypeList', chooseSubject.id);
    // wx.setStorageSync('questionIdList', questionIdList);
    // console.log(questionIdList);
    // console.log(chooseSubject.id);
    clearTimeout(this.data.timeout);
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
  computeTF: function(x,y){
    var L = 240 / 750 * wx.getSystemInfoSync().screenWidth;
    var R = 520 / 750 * wx.getSystemInfoSync().screenWidth;
    var T = 550 / 1500 * wx.getSystemInfoSync().windowHeight;
    var B = 785 / 1500 * wx.getSystemInfoSync().windowHeight;
    var xL = x;
    var xR = x+  150 / 750 * wx.getSystemInfoSync().screenWidth;
    var yT = y;
    var yB = y + 145 / 1500 * wx.getSystemInfoSync().windowHeight;
    // console.log(xL,xR,yT,yB);
    // console.log(L,R,T,B);
    if(xR < R && xL > L && yT >T && yB < B){
      return 1;
    }
    else{
      return 0;
    }
  },
  location: function(e){
    var currentLocation = this.data.currentLocation;
    currentLocation.x = e.detail.x;
    currentLocation.y = e.detail.y;
    currentLocation.id = e.currentTarget.id;
    // console.log(currentLocation);
    this.setData({
      currentLocation:currentLocation
    })
  },
  endLocation: function(e){
    var currentLocation = this.data.currentLocation;
    var x = currentLocation.x;
    var y = currentLocation.y;
    var id = currentLocation.id;
    var computeTF = this.computeTF;
    // console.log(currentLocation);
    var animationMoved = this.data.animationMoved;
    // console.log(animationMoved);
    if(computeTF(x,y) == 1){
      var subject = this.data.subject;
      var chooseSubject = this.data.chooseSubject;
      chooseSubject.count = chooseSubject.count + 1;
      chooseSubject.id.push(+id);
      // console.log(chooseSubject);
      subject[id].current = 1;
      this.setData({
        chooseSubject:chooseSubject,
        subject:subject
      })
      if(animationMoved == 0){
        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        // console.log(pages);
        var animation = wx.createAnimation({
          duration: 500,
          timingFunctionL: 'linear',
          transformOrigin: 'center center 0',
          success: function (res) {
            // console.log(res);
          }
        })
        var animationMoved = page.data.animationMoved;
        animationMoved = 1;
        this.animation = page.animation;
        animation.rotate(45).step();
        page.setData({
          animationMoved:animationMoved,
          animation: animation.export(),
        })
      }
    }
  },
  openMinus: function(e){
    var minusTouch = this.data.minusTouch;
    var chooseSubject = this.data.chooseSubject;
    if (minusTouch == 0 && chooseSubject.count != 0){
      minusTouch = 1;
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var animation1 = wx.createAnimation({
        duration: 700,
        timingFunctionL: 'linear',
        transformOrigin: 'center center 0',
        success: function (res) {
          // console.log(res);
        }
      })
      var timeout = setTimeout(function(){
        page.setData({
          minusTouch: minusTouch,
        })
      },700)
      var minusZ = page.data.minusZ;
      minusZ = 80;
      this.animation1 = page.animation1;
      animation1.rotate(180).scaleX(4).scaleY(3.5).step();
      page.setData({
        animation1:animation1.export(),
        minusZ:minusZ,
        timeout:timeout
      })
    }
  },
  computeTF1: function (x, y) {
    var T = 50 / 1500 * wx.getSystemInfoSync().windowHeight;
    var B = 1300 / 1500 * wx.getSystemInfoSync().windowHeight;
    var yT = y;
    var yB = y + 145 / 1500 * wx.getSystemInfoSync().windowHeight;
    console.log(yT,yB);
    console.log(T,B);
    if (yT < T || yB > B) {
      return 1;
    }
    else {
      return 0;
    }
  },
  endLocation1: function (e) {
    var currentLocation = this.data.currentLocation;
    var x = currentLocation.x;
    var y = currentLocation.y;
    var id = currentLocation.id;
    var computeTF1 = this.computeTF1;
    // console.log(currentLocation);
    var animationMoved = this.data.animationMoved;
    // console.log(animationMoved);
    if (computeTF1(x, y) == 1) {
      var index;
      var subject = this.data.subject;
      var chooseSubject = this.data.chooseSubject;
      chooseSubject.count = chooseSubject.count - 1;
      for(var i=0; i<chooseSubject.id.length; i++){
          if(chooseSubject.id[i] == id){
            index = i;
          }
      }
      chooseSubject.id.splice(index,1);
      // console.log(chooseSubject);
      subject[id].current = 0;
      this.setData({
        chooseSubject: chooseSubject,
        subject: subject
      })
      if (chooseSubject.count == 0) {
        var pages = getCurrentPages();
        var page = pages[pages.length - 1];
        // console.log(pages);
        var animation = wx.createAnimation({
          duration: 500,
          timingFunctionL: 'linear',
          transformOrigin: 'center center 0',
          success: function (res) {
            // console.log(res);
          }
        })
        var animationMoved = page.data.animationMoved;
        animationMoved = 0;
        this.animation = page.data.animation;
        animation.rotate(-90).step();
        page.setData({
          animationMoved: animationMoved,
          animation: animation.export(),
        })
      }
    }
  },
  openPlus:function(e){
    var minusTouch = this.data.minusTouch;
    var chooseSubject = this.data.chooseSubject;
    if (minusTouch == 1) {
      minusTouch = 0;
      var pages = getCurrentPages();
      var page = pages[pages.length - 1];
      var animation1 = wx.createAnimation({
        duration: 800,
        timingFunctionL: 'linear',
        transformOrigin: 'center center 0',
        success: function (res) {
          // console.log(res);
        }
      })
      // var timeout = setTimeout(function () {
      //   page.setData({
          
      //   })
      // }, 0)
      var minusZ = page.data.minusZ;
      minusZ = 19;
      this.animation1 = page.animation1;
      animation1.rotate(-180).scaleX(1).scaleY(1).step();
      page.setData({
        animation1: animation1.export(),
        minusTouch: minusTouch,
        minusZ: minusZ
      })
    }
  },
  clickNext:function(){
    var that = this;
    var animation1 = wx.createAnimation({
      duration: 700,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
      }
    })
    animation1.rotate(180).scaleX(4).scaleY(3.5).step();
    that.setData({
      maskOne:true,
      maskTwo:false,
      animation1: animation1.export(),
      minusZ: 80,
    })
  },
  clickFinish:function(){
    var that = this;
    wx.setStorageSync('isFirst', 0);
    var animation1 = wx.createAnimation({
      duration: 700,
      timingFunctionL: 'linear',
      transformOrigin: 'center center 0',
      success: function (res) {
      }
    })
    animation1.rotate(-180).scaleX(1).scaleY(1).step();
    that.setData({
      maskTwo: true,
      animation1: animation1.export(),
      minusZ: 19,
    })
  }
})