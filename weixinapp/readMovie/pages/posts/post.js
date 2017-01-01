// 当前版本 require只能相对路径
var postsData = require('../../data/posts-data.js');

Page({
  data: {
    //小程序总是会读取data对象来做数据绑定,这是在onload事件执行之后发生的
  },
  onLoad: function () {
    //页面初始化, options为页面跳转所带来的参数
    this.setData({ posts_key: postsData.postList })
  },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    });

  }
})