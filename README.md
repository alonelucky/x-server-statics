# x-server-statics
node 原生依赖静态资源服务

这是自己使用的node原生静态资源处理,仅供交流学习,请不要放在生产中使用.
使用方法可以结合原生http模块使用,也可以结合express

    serverSratic = require('x-server-statics');
    // 传递两个个参数1.[req,res]数组,2.静态资源路径,字符串
    serverStatic([req,res],'./public');
    
    
在http模块中使用
    
    http.createServer((req,res)=>{
        serverStatic(arguments,'./public');
    })
    
    
在express中使用

    app.use((req,res,next)=>{
        serverSratic(arguments,'./public');
    })