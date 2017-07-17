/**
 * Created by Administrator on 2017/7/17.
 */

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const mime = {
    '.html':'text/html',
    '.css':'text/css'
}

const server = http.createServer((req,res)=>{
    // 获取连接的path部分
    let src = url.parse(req.url).pathname;
    // 获取path部分的文件后缀
    let extname = path.extname(src);
    // 如果文件扩展名存在则执行文件读取输出
    if(extname){
        // 读取对应路径下的文件
        fs.readFile('./public/'+src,(err,data)=>{
            // 不存在返回404
            if(err){
                res.writeHead(404,{'content-type':mime[extname]});
                res.end('Not Found');
            }
            // 存在返回数据
            res.writeHead(200,{'content-type':mime[extname]});
            res.end(data);
        });
    }else{
        // 如果没有文件扩展名,则按文件夹处理,读取改文件夹下的index.html文件
        fs.readFile('./public/'+src+'/index.html',(err,data)=>{
            // 如果不存在,返回404
            if(err){
                res.writeHead(404,{'content-type':mime[extname]});
                res.end('Not Found');
                return;
            }
            // 如果存在,返回数据
            res.writeHead(200,{'content-type':mime[extname]});
            res.end(data);
        });
    }
});

server.listen(3000);

