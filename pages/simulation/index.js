import {ExamModel} from '../../models/examModel.js';
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog.js';
const examModel = new ExamModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //下拉列表
    subjectMenu: [
      { text: '全部', value: -1 },
      { text: '算法', value: 1 },
      { text: '数学', value: 2 },
      { text: '思修', value: 3 },
      { text: '数据库', value: 4 },
      { text: '英语', value: 5 },
      { text: '计组', value: 6 },
    ],
    yearMenu: [
      { text: '全部', value: -1 },
      { text: '2020', value: '2020' },
      { text: '2019', value: '2019' },
      { text: '2018', value: '2018' },
      { text: '2017', value: '2017' },
    ],
    value0: -1,
    // 显示试卷信息
    pageList: null,
    // 遮罩层控制
    showOverlay: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this._getExamPages();
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

  // 获取全部试卷
  _getExamPages(){
    examModel.getAllExamPaper(res=>{
      console.log(res);
    })
  },

  // 显示paperInfo
  onClickShowOverlay(){
    this.setData({
      showOverlay:true
    })
  },

  // 隐藏pagerInfo
  onClickHideOverlay(){
    this.setData({
      showOverlay:false
    })
  },

  // 开始答题
  onClickStart(){
    Dialog.confirm({
      message: '是否开始模拟测试',
    })
      .then(() => {
        wx.navigateTo({
          url: 'simulation',
        });
      })
      .catch(() => {
        // on cancel
      });
  }
})