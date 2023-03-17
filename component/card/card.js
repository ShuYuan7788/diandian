// component/card/card.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageUrl:{
      type:String,
      value:""
    },
    text:{
      type:String,
      value:""
    },
    url:{
      type:String,
      value:""
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
        url: this.properties.url
      })
    }
  }
})
