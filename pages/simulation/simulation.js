// pages/simulation/simulation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //单选题答案
    radio:'0',
    //多选题答案
    checkboxresult:['A'],
    // 多选题选中状态记录,需要设置
    checkboxActive:[true,false,false,false],
    //填空题答案
    inputResult:'',
    //综合题答案
    ComprehendResult:'',
    //判断题答案
    judgeResult:'',
    //上传图片列表
    fileList: [],
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

  // onRadioChange(){
  //   this.setData({
  //     radio: event.detail,
  //   });
  // },

  //单选框设置答案
  onRadioClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
    });
  },

  //设置多选结果
  onCheckboxChange(event){
    // 设置选中状态
    let resArr = event.detail;
    let checkboxActive = [false,false,false,false];
    if(resArr.indexOf("A") != -1){
      checkboxActive[0] = true;
    }
    if(resArr.indexOf("B") != -1){
      checkboxActive[1] = true;
    }
    if(resArr.indexOf("C") != -1){
      checkboxActive[2] = true;
    }
    if(resArr.indexOf("D") != -1){
      checkboxActive[3] = true;
    }
    // 设置答案
    this.setData({
      checkboxresult: event.detail,
      checkboxActive
    });
  },

  //切换多选选中状态
  toggle(event) {
    const { index } = event.currentTarget.dataset;
    const checkbox = this.selectComponent(`.checkboxes-${index}`);
    checkbox.toggle();
  },

  //判断题设置答案
  onJudgeClick(event){
    const { name } = event.currentTarget.dataset;
    this.setData({
      judgeResult: name,
    });
  },

  //设置填空题答案
  onInput(e){
    this.setData({
      inputResult:e.detail
    })
  },

  //清楚填空题答案
  onInputClear(){
    this.setData({
      inputResult:''
    })
  },

  //设置综合题文本答案
  onComprehend(e){
    this.setData({
      ComprehendResult:e.detail
    })
  },

  //清除综合题文本答案
  onComprehendClear(){
    this.setData({
      ComprehendResult:''
    })
  },

  //上传图片完成事件
  afterRead(event){
    const { file } = event.detail;
    const { fileList = [] } = this.data;
    fileList.push({url: file.path});
    this.setData({
      fileList
    })
  },


  //删除上传图片
  deleteFile(e){
    let fileList = this.data.fileList;
    fileList.splice(e.detail.index,1);
    this.setData({
      fileList
    })
  }
})