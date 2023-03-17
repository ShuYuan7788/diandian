Component({
  data: {
  active: 0,
  list: [
    {
      "url": "/pages/index/index",
      "icon": "home-o",
      "text": "首页"
    },
    {
      "url": "/pages/questionbank/questionbank",
      "icon": "points",
      "text": "题库"
    },
    {
      "url": "/pages/featured/featured",
      "icon": "edit",
      "text": "精选"
    }
  ]
  },
  methods: {
   onChange(e) {
      console.log(e,'e')
      this.setData({ active: e.detail });
      wx.switchTab({
        url: this.data.list[e.detail].url
      });
   },
   init() {
       const page = getCurrentPages().pop();
       this.setData({
      　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
       });
      }
   }
});