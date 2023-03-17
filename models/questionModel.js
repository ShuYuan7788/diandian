import {HTTP} from '../utils/http.js';

class QuestionModel extends HTTP {
  //查询题目类型所以题目
  getSubjcetQuestions(questionType,sCallBack){
    this.request({
      url: 'questions/type',
      data:{
        questionType
      },
      success: res=>{
        sCallBack(res);
      }
    })
  }

  //查询所有题目
  getAllQuestions(sCallBack){
    this.request({
      url: 'questions/all',
      success:res=>{
        sCallBack(res);
      }
    })
  }
}

export {QuestionModel};