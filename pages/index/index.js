//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    isShow: true,
    isTrue: false,
    userInfo: {},
    city:"甘肃"
  },
  //获取地理位置
  onLoad: function(){
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function(res) {
        console.log(res);
        var latitude = res.latitude;
        var longitude = res.longitude;
        var speed = res.speed;
        var accuracy = res.accuracy;
        setTimeout(function(){
          _this.setData({
            city:"北京"
          })
        },2000)
        
        // wx.request({
        //   url: 'https://URL',
        //   data: {
        //     lat: latitude,
        //     long: longitude
        //   },
        //   method: 'GET', 
        //   success: function(res){
            
        //     var data = res;
        //     _this.setData({
        //       city : res.city
        //     })
        //   }
        // })
      }
    })
  },
  //给查询按钮添加点击事件
  searchEvent: function(){
    wx.showLoading({
      title: "请选择地点"
    })
    setTimeout(function(){
      wx.hideLoading()
    },2000)
  },
  //事件处理函数
  leapEvent: function() {
    var _this = this;
    this.setData({
      isShow: !_this.data.isShow
    })
  }
})
