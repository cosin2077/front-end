// pages/movies/movie-detail/movie-detail.js
var app = getApp();
var util = require("../../../utils/util.js")
Page({
  data:{movie:{}},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var movieId = options.id;
    var url = app.globalData.doubanBase+'/v2/movie/subject/'+movieId;
    util.http(url,this.processDoubanData);
  },
  processDoubanData:function(data){
    console.log(data);
    var director = {
      avatar:"",
      name:"",
      id:""
    }
    if(data.directors[0]!=null){
      if(data.directors[0].avatar!=null){
        director.avatar = data.directors[0].avatar.large
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id;
    }
    var movie = {
      movieImg:data.images?data.images.large:"",
      country:data.countries[0],
      title:data.title,
      originalTitle:data.original_title,
      wishCount:data.wish_count,
      commentCount:data.comments_count,
      year:data.year,
      generes:data.genres.join("、"),
      stars:util.convertToStarsArray(data.casts),
      score:data.rating.average,
      director:director,
      casts:util.convertToCastString(data.casts),
      castsInfo:util.convertToCastInfos(data.casts),
      summary:data.summary
    }
    this.setData({
      movie:movie
    })
  },
  viewMoviePostImg:function(e){
    var src = e.currentTarget.dataset.src;
    wx.previewImage({
      // current: 'String', // 当前显示图片的链接，不填则默认为 urls 的第一张
      current:src,
      urls: [src]
    })
  }
})