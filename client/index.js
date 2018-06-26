var  num=0

Page({
   data:{

   },
   onLoad:function(options){
     var that=this
     wx.request({
       url: 'https://yqyckkai.qcloud.la/list.php',
       data:{
         number:num
       },
       success:function(res){
         that.setData({
           array:res.data
         })
       }
     })
   },

   short:function(e){
     var id=e.target.id
     wx.navigateTo({
       url: '../article?dataid='+id
     })
   },

   onReachBottom:function(){
     var that=this
     num=num+5
     wx.request({
       url: 'https://yqyckkai.qcloud.la/list.php',
       data:{
         number:num
       },
       header:{
         'content-type':'application/x-www/form-urlencode'
       },
       success:function(res){
         that.setData({
           array:res.data
         })
       }
     })
   }


})