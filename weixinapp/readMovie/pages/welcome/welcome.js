Page({
    onTap:function(){
        // wx.navigateTo({
        //     url:"../posts/post"
        //     });
        // 导航至主页(没有返回按钮)
        wx.redirectTo({
          url: '../posts/post',
          success: function(res){
            // success
          },
          fail: function() {
            // fail
          },
          complete: function() {
            // complete
          }
        });
    },
    onUnload:function(){
        //
    },
    onHide:function(){
        //
    }
})