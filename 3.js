const fs = require('fs');
const child_process = require('child_process');
var args = process.argv.splice(2)//接受命令行参数（默认为文本格式）数组
const roomids = args

 function hy(roomids){
	for(var i=0; i<roomids.length; i++) 
	{
	   var workerProcess = child_process.spawn('node', ['2.js', i,roomids[i]]);
	 
	    workerProcess.stdout.on('data', function (data) {  //返回子进程输出
	       console.log('stdout: ' + data);
	    });
	 
	    workerProcess.stderr.on('data', function (data) {//返回子进程错误
	       console.log('stderr: ' + data);
	    });
	 
	    workerProcess.on('close', function (code) {
	       console.log('子进程已退出，退出码 '+code);
	    });
	}
	}

hy(roomids)