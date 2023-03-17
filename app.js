//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.setStorageSync("isRegister", false);
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
    })

    wx.getSystemInfo({
      success: e => {
        let modelmes = e.model;
        this.globalData.statusBar = e.statusBarHeight; //状态栏高度
        let custom = wx.getMenuButtonBoundingClientRect();//菜单按钮
        this.globalData.modelmes = modelmes;
        this.globalData.custom = custom;
        console.log(e);
        this.globalData.windowHeight=e.windowHeight;
        this.globalData.customBar = custom.bottom + custom.top - e.statusBarHeight;
        //计算得到定义的状态栏高度
      },
    })
  },
  globalData: {
    targetUrl: "https://api.geek52.cn/",
    imageUrl: "https://tk.geek52.cn/",
    fileUrl:  "https://tk.geek52.cn/",
    userInfo: null,
    modelmes: null,//手机型号
    custom: {},
    windowHeight:null,
    customBar: null,
    statusBar: null,
/*大一*/data1: [
/*计算机*/ {
        up: [{class: '1',questionType: [1, 2],},
             {class: '2',questionType: [1, 2],},
             {class: '3',questionType: [1, 2],}
        ],
        down: [{class: '1',questionType: [1, 2],},
               {class: '2',questionType: [1, 2],},
               {class: '3',questionType: [1, 2]}
        ]
      },
/*理学院*/ {
        up: [{class: '1',questionType: [1],},
             {class: '2',questionType: [1],},
             {class: '3',questionType: [1]}
        ],
        down: [{class: '1',questionType: [1],},
               {class: '2',questionType: [1],},
               {class: '3',questionType: [1]}
        ]
      }
    ],
/*大二*/data2:[
/*计算机*/{
        up: [{class: '1',questionType: [1, 2, 3, 4],},
             {class: '2',questionType: [1, 2, 3, 4],},
             {class: '3',questionType: [1, 2, 3, 4]}
            ],
        down: [{class: '1',questionType: [1, 2, 3, 4],},
               {class: '2',questionType: [1, 2, 3, 4],},
               {class: '3',questionType: [1, 2, 3, 4]}
        ]
      },
/*理学院*/ {
        up: [{class: '1',questionType: [1],},
            {class: '2',questionType: [1],},
            {class: '3',questionType: [1]}
        ],
        down: [{class: '1',questionType: [1],},
               {class: '2',questionType: [1],},
               {class: '3',questionType: [1]}
        ]
      }
    ]
  }
})