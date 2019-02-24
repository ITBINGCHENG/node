//本脚本利用虎牙开放平台api实现读取弹幕的操作
var md5=require("md5-node")
var data='{"roomId":11279251}'
var appId='154751727055855148'
var key='*********'
var time = Math.round(new Date().getTime()/1000)
var sign = md5('data='+data+'&key='+key+'&timestamp='+time)
var WebSocket = require('ws')
var socket = new WebSocket("ws://openapi.huya.com/index.html?do=getMessageNotice&data={\"roomId\":11279251}&appId="+appId+"&timestamp="+time+"&sign="+sign);


socket.onopen=function(event)
{
    socket.send('ping');
    setInterval(function(){
        socket.send('ping');
    },15000);
};
//处理到来的信令
socket.onmessage = function(event){
    console.log('onmessage: ',event.data);
    var json = JSON.parse(event.data);
    if (json.statusCode == 200)
    {
        //TODO处理弹幕数据json.data
        // document.write('['+json.data.sendNick+']: '+json.data.content+'');
    }
    else
    {
        //TODO 错误处理
    }
};
