Page({
    onTap:function(){
        wx.switchTab({
            url:"../posts/post"
            });
        // 导航至主页(没有返回按钮)
        // wx.redirectTo({
        //   url: '../posts/post',
        // });
    },
    onTextTap:function(){
        // wx.navigateTo({
        //     url:"../posts/post"
        //     });
        // 导航至主页(没有返回按钮)
        wx.redirectTo({
          url: '../posts/post',
        });
    },
    onUnload:function(){
        //
    },
    onHide:function(){
        //
    }
})