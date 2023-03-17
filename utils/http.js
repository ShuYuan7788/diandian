const appInst =  getApp();
const tips = {
  1: '网路不灵活了~',
  2: '服务器可能不小心走丢了~'
}

class HTTP {
  request(params,preUrl){
    //params:method data url header(object)
    //preUrl为服务器根url
    //回调一个success方法
    if (!params.method) {
      params.method = 'GET';
    }
    if (!params.header) {
      params.header = {
        "content-type": 'application/json'
      };
    }
    if(!preUrl){
      preUrl = appInst.globalData.targetUrl;
    }
    wx.request({
      url: preUrl + params.url,
      method: params.method,
      data: params.data,
      header: params.header,
      timeout:3000,
      success: (res) => {
        params.success && params.success(res.data);
      },
      fail: (err) => {
        this._show_error(1);
      }
    })
  }

  _show_error(error_code) {
    if (!error_code) {
      error_code = 1;
    }
    wx.showToast({
      title: tips[error_code],
      icon: 'none',
      duration: 2000
    })
  }
}

export{HTTP};