// component/rankitem/rankitem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index:{
      type:Number,
      value:0
    },
    item:{
      type:Object,
      value:{}
    },
    number:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick:function(e){
      wx.navigateTo({
        url: "/pages/userinfo/userinfo",
      })
    }
  }
})
