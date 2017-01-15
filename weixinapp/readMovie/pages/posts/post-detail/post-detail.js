var postsData = require("../../../data/posts-data.js")
var app = getApp();
Page({
    data: {
    },
    onLoad: function (option) {
        var globalData = app.globalData;
        var postId = option.id;
        // this.setData({currentPostId : postId});
        var postData = postsData.postList[postId];
        // 最新版本好像只能用setData方法了
        this.setData({ currentPostId: postId, postData: postData });
        // 缓存上限不超过10M,不主动删除就会一直存在
        // wx.setStorageSync('key', { who: "conans plusHero!!!", time: "2017.1.1" });
        // wx.setStorageSync('cookie', "adaef234rf5364y4hbw6y67iuojmnvaaeg56/f")
        var postsCollected = wx.getStorageSync('posts_collected');//获取缓存的文件
        if (postsCollected) {
            var postCollected = postsCollected[postId];
            this.setData({
                collected: postCollected
            })
        } else {
            var postsCollected = {};
            postsCollected[postId] = false;
            wx.setStorageSync('posts_collected', postsCollected);
        };
        if(app.globalData.g_isPlayingMusic&&app.globalData.g_currentMusicPostId===postId){
            this.setData({isPlayMusic : true});
        }
        this.setMusicMonitor();
    },
    setMusicMonitor: function () {
        var that = this
        wx.onBackgroundAudioPlay(function () {
            that.setData({
                isPlayMusic: true
            });
            app.globalData.g_isPlayingMusic = true;
            app.globalData.g_currentMusicPostId = that.data.currentPostId;
        });
        wx.onBackgroundAudioStop(function() {
          that.setData({
                isPlayMusic: false
            });
            app.globalData.g_isPlayingMusic = false;
            app.globalData.g_currentMusicPostId = null;
        });
        wx.onBackgroundAudioPause(function () {
            that.setData({
                isPlayMusic: false
            });
            app.globalData.g_isPlayingMusic = false;
            app.globalData.g_currentMusicPostId = null;
        });
    },
    onCollectionTap: function (event) {
        // this.getPostsCollectedSyc();//同步
        this.getPostsCollectiontedAsy();//异步
    },
    // 同步方法
    getPostsCollectedSyc: function () {
        var postsCollected = wx.getStorageSync('posts_collected');
        var postCollected = postsCollected[this.data.currentPostId];
        // 点击切换收藏与未收藏
        postCollected = !postCollected;
        postsCollected[this.data.currentPostId] = postCollected;
        this.showToast(postsCollected, postCollected);
    },
    //异步方法
    getPostsCollectiontedAsy: function () {
        var that = this;
        wx.getStorage({
            key: 'posts_collected',
            success: function (res) {
                var postsCollected = res.data;
                var postCollected = postsCollected[that.data.currentPostId];
                // 点击切换收藏与未收藏
                postCollected = !postCollected;
                postsCollected[that.data.currentPostId] = postCollected;
                that.showToast(postsCollected, postCollected);
            },
            fail: function () {
                // fail
            },
            complete: function () {
                // complete
            }
        })
    },

    showModal: function (postsCollected, postCollected) {
        var that = this;
        wx.showModal({
            title: "收藏",
            content: postCollected ? "收藏该文章?" : "取消收藏该文章?",
            showCancel: true,
            cancelText: "取消",
            cancelColor: "#333",
            confirmText: "确认",
            confirmColor: "#405f80",
            success: function (res) {
                if (res.confirm) {
                    // 更新文章是否收藏的缓存值
                    wx.setStorageSync('posts_collected', postsCollected);
                    // 更新数据绑定,从而实现切换图片
                    that.showToast();
                    that.setData({
                        collected: postCollected
                    });
                }
            }
        })
    },
    showToast: function (postsCollected, postCollected) {
        // 更新文章是否收藏的缓存值
        wx.setStorageSync('posts_collected', postsCollected);
        // 更新数据绑定,从而实现切换图片
        this.setData({
            collected: postCollected
        });
        wx.showToast({
            title: postCollected ? "收藏成功" : "取消成功",
            duration: 1000,
            icon: "success"
        });
    },
    onShareTap: function (event) {
        var itemList = [
            "分享给微信好友",
            "分享到朋友圈",
            "分享到到QQ",
            "分享到微博"
        ];
        wx.showActionSheet({
            itemList: itemList,
            itemColor: "#405f80",
            success: function (res) {
                // re.cancel 用户是不是点击了取消按钮
                // res.tapIndex 点击的数组元素的序号,从零开始
                wx.showModal({
                    title: "用户" + itemList[res.tapIndex],
                    content: "用户是否取消? " + res.cancel + " 现在无法分享"
                })
            }
        })
    },
    // onCollectionTap:function(event){
    //     var game =wx.getStorageSync('key');
    // },
    // onShareTap:function(event){
    //     wx.removeStorageSync('key');
    //     // 清除所有缓存
    //     // wx.clearStorageSync();
    // }
    onMusicTap: function (event) {
        var currentPostId = this.data.currentPostId
        var isPlayMusic = this.data.isPlayMusic;
        var postData = postsData.postList[currentPostId]
        if (isPlayMusic) {
            wx.pauseBackgroundAudio();
            this.setData({
                isPlayMusic: false
            })
            // this.data.isPlayMusic = false;不能这样绑定数据
        }
        else {
            wx.playBackgroundAudio({
                dataUrl: postData.music.url,
                title: postData.music.title,
                coverImgUrl: postData.music.coverImg
            });
            this.setData({
                isPlayMusic: true
            })
            // this.data.isPlayMusic = true;
        }
    },

})
