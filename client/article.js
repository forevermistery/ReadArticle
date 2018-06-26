var util = require('../../utils/util.js')
var list,id,time
Page({
  data:{},
  onLoad:function(options){
    var that=this
    id=options.dataid
   
    wx.request({
      url: 'https://yqyckkai.qcloud.la/content.php',
      data:{
        id:id,
        
       
      },
      header:{
        'content-type':'application/x-www-form-urlencode'
      },
      success:function(res){
        list=res.data
       
        that.setData({
          article:res.data
          
        })
      }
    })
    
  },
  
  onShareAppMessage:function(){
    return{
      title:list.title,
      
      desc:list.content,
      path:'article?dataid='+id
    }
  }


})