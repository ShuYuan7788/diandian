import {HTTP} from '../utils/http.js';

class ExamModel extends HTTP{
  //获取所有试卷
  getAllExamPaper(sCallBack){
    let url = "exams/all";
    this.request({
      url:url,
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //获取某科目所有试卷详细信息(根据类型)
  getExamPaperByType(type,sCallBack){
    this.request({
      url: 'exams',
      data:{
        examType: type
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }
  //获取某年所以试卷信息
  getExamPaperByYear(year,sCallBack){
    this.request({
      url: 'exams/year',
      data:{
        examYear: year
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }

  //获取某年某类型试卷信息
  getExamPaperByBoth(type,year,sCallBack){
    this.request({
      url: 'exams/both',
      data:{
        examType: type,
        examYear: year
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }

  //查询某张试卷详细信息
  getExamPaperDetail(examId,sCallBack){
    let examIdString = examId.toString();
    this.request({
      url: '/exams/' + examIdString,
      success: res=>{
        sCallBack(res);
      }
    })
  }

  
  //查询某科目的所有题目
  getPaperQuestions(examId,sCallBack){
    this.request({
      url : 'question/exams',
      data:{
        examId
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }

  //提交收藏
  postCollection(questionId,sCallBack){
    let userId = wx.getStorageSync("userId");
    let createdTime = this._getCurrentTime();
    let url = "questions/collect/" + questionId;
    this.request({
      url:url,
      method : 'POST',
      header: {
        'content-type': 'application/json',
      },
      data:{
        userId,
        createdTime
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }

  //查询用户收藏题目状态
  getCollectionStatus(questionId,sCallBack){
    let userId = wx.getStorageSync("userId");
    this.request({
      url: 'questions/collect',
      data:{
        userId,
        questionId
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }

  //取消收藏
  cancelCollection(questionId,sCallBack){
    let userId = wx.getStorageSync("userId");
    this.request({
      url: 'questions/collect',
      method: 'DELETE',
      data:{
        userId,
        questionId
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //查询用户收藏的所以题目
  getCollectionQuestion(userId,sCallBack){
    this.request({
      url : "questions/collect/" + userId,
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //添加考试记录
  postExamRecord(examId,score,sCallBack){
    let userId = wx.getStorageSync("userId");
    let createdTime = this._getCurrentTime();
    console.log(createdTime);
    this.request({
      url : 'exams/records/' + userId + "/" + examId,
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      data:{
        userId,
        examId,
        score,
        createdTime
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //查看某用户考试记录 
  getExamRecord(examId,sCallBack){
    let userId = wx.getStorageSync("userId");
    this.request({
      url: 'exams/records',
      data:{
        userId,
        examId
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }

  //更新某试卷的记录
  upDataExamRecord(examId,score,sCallBack){
    let userId = wx.getStorageSync("userId");
    console.log(score);
    this.request({
      url: 'exams/records/' + userId + '/' + examId,
      method: 'PUT',
      data:{
        userId,
        examId,
        score
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //添加题目记录
  //answerRecord{answerContent、createdTime、isCorrect、answerImage(选填)}
  //questionId
  //params:{questionId:id,answerContent:answerContent,isCorrect:isCorrect,answerImage:answerImageUrl};
  postQuestionRecord(params,sCallBack){
    console.log(params.questionId,params.answerContent,params.isCorrect,params.answerImage);
    let userId = wx.getStorageSync("userId");
    let url = "questions/records/"+userId+"/"+params.questionId;
    let createdTime = this._getCurrentTime();
    this.request({
      url:url,
      method:'POST',
      data:{
        userId,
        answerContent:params.answerContent,
        createdTime,
        isCorrect:params.isCorrect,
        answerImage:params.answerImage
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //查询某条答题记录
  getQuestionRecord(questionId,sCallBack){
    let userId = wx.getStorageSync("userId");
    let url = "questions/records";
    this.request({
      url:url,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data:{
        userId,
        questionId
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //更新某条答题记录
  //params:{questionId:id,answerContent:answerContent,isCorrect:isCorrect,answerImage:answerImageUrl};
  upDataQuestionRecord(params,sCallBack){
    
    let userId = wx.getStorageSync("userId");
    let url = "questions/records";
    let createdTime = this._getCurrentTime();
    console.log(params.questionId,params.answerContent,params.isCorrect,params.answerImage);
    console.log(createdTime);
    this.request({
      url:url,
      method:'PUT',
      data:{
        userId,
        questionId:params.questionId,
        answerContent:params.answerContent,
        createdTime,
        isCorrect:params.isCorrect,
        answerImage:params.answerImage
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //搜索试卷
  searchExam(string,sCallBack){
    let url = "search/exams";
    this.request({
      url:url,
      data:{
        string:string
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }
  
  //搜索题目
  searchQuestion(string,sCallBack){
    let url = "search/questions";
    this.request({
      url:url,
      data:{
        string:string
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //获取试卷文件
  downLoadExam(examId,sCallBack){
    let url = "examFile/" + examId;
    this.request({
      url,
      success:res=>{
        sCallBack(res);
      }
    })
  }

  //提交答题个数
  postQuestionNumber(questionNumber,sCallBack){
    let userId = wx.getStorageSync("userId");
    let url = "users/" + questionNumber;
    this.request({
      url,
      method: 'PUT',
      data:{
        userId
      },
      success:res=>{
        sCallBack(res);
      }
    })
  }
  

  _getCurrentTime(){
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let date = time.getDate();
    let hours = time.getHours() < 10?'0'+ time.getHours():time.getHours();
    let minutes = time.getMinutes() < 10?'0' + time.getMinutes():time.getMinutes();
    let seconds = time.getSeconds() < 10?'0' + time.getSeconds():time.getSeconds();
    let currentTime = year + "-" + month + "-"+ date + " " + hours +":" + minutes +":"+ seconds;
    return currentTime.toString();
  }
}

export{ExamModel};