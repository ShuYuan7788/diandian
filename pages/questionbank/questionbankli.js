import {QuestionModel} from '../../models/questionModel.js';
const questionModel = new QuestionModel();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //下拉列表
    typeMenu: [
      { text: '全部', value: -1 },
      { text: '选择题', value: 1 },
      { text: '填空题', value: 2 },
      { text: '判断题', value: 3 },
      { text: '综合题', value: 4 },
    ],
    yearMenu: [
      { text: '全部', value: -1 },
      { text: '2020', value: '2020' },
      { text: '2019', value: '2019' },
      { text: '2018', value: '2018' },
      { text: '2017', value: '2017' },
      { text: '其它', value: 5 },
    ],
    difficultyMenu: [
      { text: '全部', value: -1 },
      { text: '简单', value: 1 },
      { text: '中等', value: 2 },
      { text: '困难', value: 3 },
    ],
    value0: -1,
    //试题列表
    questionList: null,
    //临时所有试题列表
    questionTempList:null,
    //当前题目科目类型
    questionClass: null,
    //当前题目类型
    questionType : -1,
    //当前题目年份
    questionYear : -1,
    //当前题目难度
    questionCredit : -1
  },
  onClick:function(e){
    wx.navigateTo({
      url: '/pages/search/search?type=exam',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getQuestionList(options.id);
  },

  //获取试题列表
  getQuestionList(id){
    let that = this;
    if(id == "-1"){
      questionModel.getAllQuestions(res=>{
        that.setData({
          questionTempList : res.data,
          questionList : res.data,
          questionClass : id
        })
      })
    }else{
      questionModel.getSubjcetQuestions(id,res=>{
        that.setData({
          questionTempList : res.data,
          questionList : res.data,
          questionClass : id
        })
      })
    }
  },

  //题目类型变化事件
  onTypeChange(e){
    this.data.questionType = e.detail;
    this._filterQuestion();
    this._pageScrollToTop();
  },

  onYearChange(e){
    this.data.questionYear = e.detail;
    this._filterQuestion();
    this._pageScrollToTop();
  },
  

  onDifficultyChange(e){
    this.data.questionCredit = e.detail;
    this._filterQuestion();
    this._pageScrollToTop();
  },

//页面滑动到顶部
  _pageScrollToTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    });
  },

  //过滤题目
  _filterQuestion(){
    let questionType = this.data.questionType;
    let questionYear = this.data.questionYear;
    let questionCredit = this.data.questionCredit;
    let values = {questionType,questionYear,questionCredit};
    this._filter(values);
  },

  //过滤题目类型
  _filter(values){
    let questionType = values.questionType;
    let questionYear = values.questionYear;
    let questionCredit = values.questionCredit;
    let questionList = this.data.questionTempList;
    let that = this;
    if(questionType === 1){

      if(questionYear === -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isOption === true;
        })
      }else if(questionYear === -1 && questionCredit != -1){
        questionList = questionList.filter(function(question){
          return question.isOption === true && question.questionCredit === questionCredit;
        })
      }else if(questionYear != -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isOption === true && question.questionYear == questionYear;
        })
      }else{
        questionList = questionList.filter(function(question){
          return question.isOption === true && question.questionYear == questionYear
          && question.questionCredit === questionCredit;
        })
      }

    }else if(questionType === 2){
      
      if(questionYear === -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isFill === true;
        })
      }else if(questionYear === -1 && questionCredit != -1){
        questionList = questionList.filter(function(question){
          return question.isFill === true && question.questionCredit === questionCredit;
        })
      }else if(questionYear != -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isFill === true && question.questionYear == questionYear;
        })
      }else{
        questionList = questionList.filter(function(question){
          return question.isFill === true && question.questionYear == questionYear
          && question.questionCredit === questionCredit;
        })
      }

    }else if(questionType === 3){

      if(questionYear === -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isJudge === true;
        })
      }else if(questionYear === -1 && questionCredit != -1){
        questionList = questionList.filter(function(question){
          return question.isJudge === true && question.questionCredit === questionCredit;
        })
      }else if(questionYear != -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isJudge === true && question.questionYear == questionYear;
        })
      }else{
        questionList = questionList.filter(function(question){
          return question.isJudge === true && question.questionYear == questionYear
          && question.questionCredit === questionCredit;
        })
      }

    }else if(questionType === 4){

      if(questionYear === -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isComplex === true;
        })
      }else if(questionYear === -1 && questionCredit != -1){
        questionList = questionList.filter(function(question){
          return question.isComplex === true && question.questionCredit === questionCredit;
        })
      }else if(questionYear != -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.isComplex === true && question.questionYear == questionYear;
        })
      }else{
        questionList = questionList.filter(function(question){
          return question.isComplex === true && question.questionYear == questionYear
          && question.questionCredit === questionCredit;
        })
      }

    }else{

      if(questionYear === -1 && questionCredit != -1){
        questionList = questionList.filter(function(question){
          return question.questionCredit === questionCredit;
        })
      }else if(questionYear != -1 && questionCredit === -1){
        questionList = questionList.filter(function(question){
          return question.questionYear == questionYear;
        })
      }else if(questionYear != -1 && questionCredit != -1){
        questionList = questionList.filter(function(question){
          return question.questionYear == questionYear
          && question.questionCredit === questionCredit;
        })
      }
    }
    that.setData({
      questionList
    })

    // if(value === 1){
    //   questionList = questionList.filter(function(question){
    //     return question.isOption === true
    //   })
    // }else if(value === 2){
    //   questionList = questionList.filter(function(question){
    //     return question.isFill === true
    //   })
    // }else if(value === 3){
    //   questionList = questionList.filter(function(question){
    //     return question.isJudge === true
    //   })
    // }else if(value === 4){
    //   questionList = questionList.filter(function(question){
    //     return question.isComplex === true
    //   })
    // }
    // that.setData({
    //   questionList
    // })
  }
})