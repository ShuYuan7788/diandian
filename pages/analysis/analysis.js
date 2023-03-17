// pages/analysis/analysis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    toView:"",
    scrollTop:0,
    list:[
      {
        //题目图片
        imageUrl:"",
        //选择题选项样式
        aStyle:"",
        bStyle:"",
        cStyle:"",
        dStyle:"",
        //填空题样式
        trueStyle:"",
        falseStyle:"",
        //答案图片
        answerImage:"",
        isOption:false,
        multipleChoice :false,
        isFill :true,
        isJudge :false,
        isComplex :false,
        questionTitle :"计算机储存",
        questionContent :"在计算机储存中，15.12GB等于多少MB",
        // imageUrl,
        answerText:"15488",
        questionAnswer:"15488",
        title:"1",
        id:"id1"
      },
      {
        //题目图片
        imageUrl:"",
        //选择题选项样式
        aStyle:"",
        bStyle:"",
        cStyle:"",
        dStyle:"",
        //填空题样式
        trueStyle:"",
        falseStyle:"",
        //答案图片
        answerImage:"",
        isOption:true,
        multipleChoice :false,
        isFill :false,
        isJudge :false,
        isComplex :false,
        questionTitle :"计算机储存",
        questionContent :"在计算机储存中，15.12GB等于多少MB",
        // imageUrl,
        optionA:"15488",
        optionB:"15499",
        optionC:"15477",
        optionD:"15466",
        answerText:"15488",
        //questionAnswer:"15488",
        // answerImg,
        title:"2",
        id:"id2"
      },
      {
        //题目图片
        imageUrl:"",
        //选择题选项样式
        aStyle:"",
        bStyle:"",
        cStyle:"",
        dStyle:"",
        //填空题样式
        trueStyle:"",
        falseStyle:"",
        //答案图片
        answerImage:"",
        isOption:false,
        multipleChoice :false,
        isFill :false,
        isJudge :true,
        isComplex :false,
        questionTitle :"计算机储存",
        questionContent :"在计算机储存中，15.12GB等于15488MB",
        // imageUrl,
        optionA:"15488",
        optionB:"15499",
        answerText:"15488",
        questionAnswer:"15488",
        title:"3",
        id:"id3"
      },
      {
        //题目图片
        imageUrl:"",
        //选择题选项样式
        aStyle:"",
        bStyle:"",
        cStyle:"",
        dStyle:"",
        //填空题样式
        trueStyle:"",
        falseStyle:"",
        //答案图片
        answerImage:"",
        isOption:false,
        multipleChoice :false,
        isFill :true,
        isJudge :false,
        isComplex :false,
        questionTitle :"计算机储存",
        questionContent :"在计算机储存中，15.12GB等于多少MB",
        // imageUrl,
        answerText:"15488",
        questionAnswer:"15488",
        title:"4",
        id:"id4"
      },
      {
        //题目图片
        imageUrl:"",
        //选择题选项样式
        aStyle:"",
        bStyle:"",
        cStyle:"",
        dStyle:"",
        //填空题样式
        trueStyle:"",
        falseStyle:"",
        //答案图片
        answerImage:"",
        isOption:false,
        multipleChoice :false,
        isFill :true,
        isJudge :false,
        isComplex :false,
        questionTitle :"计算机储存",
        questionContent :"在计算机储存中，15.12GB等于多少MB",
        // imageUrl,
        answerText:"15488",
        questionAnswer:"15488",
        title:"5",
        id:"id5"
      },
      {
        //题目图片
        imageUrl:"",
        //选择题选项样式
        aStyle:"",
        bStyle:"",
        cStyle:"",
        dStyle:"",
        //填空题样式
        trueStyle:"",
        falseStyle:"",
        //答案图片
        answerImage:"",
        isOption:false,
        multipleChoice :false,
        isFill :true,
        isJudge :false,
        isComplex :false,
        questionTitle :"计算机储存",
        questionContent :"在计算机储存中，15.12GB等于多少MB",
        // imageUrl,
        answerText:"15488",
        questionAnswer:"15488",
        title:"6",
        id:"id6"
      },
      {
        //题目图片
        imageUrl:"",
        //选择题选项样式
        aStyle:"",
        bStyle:"",
        cStyle:"",
        dStyle:"",
        //填空题样式
        trueStyle:"",
        falseStyle:"",
        //答案图片
        answerImage:"",
        isOption:false,
        multipleChoice :false,
        isFill :true,
        isJudge :false,
        isComplex :false,
        questionTitle :"计算机储存",
        questionContent :"在计算机储存中，15.12GB等于多少MB",
        // imageUrl,
        answerText:"15488",
        questionAnswer:"15488",
        title:"7",
        id:"id7"
      }
    ],
  },
  //弹出层函数
  onClick:function(e){
    var that=this;
    that.setData({
      show:true
    })
  },
  //关闭弹出层函数
  onClose:function(e){
    var that=this;
    that.setData({
      show:false
    })
  },
  //题目跳转函数
  jumpTo: function (e) {
    var that=this;
    // 获取标签元素上自定义的 data-opt 属性的值
    let target = e.currentTarget.dataset.id;
    that.setData({
      toView: target,
      show:false
    })
    console.log(that.data.toView);
  },
    //设置选项样式函数
    
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