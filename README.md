# nodeData
nodejs 接口数据模拟

在项目根目录下新建一文件, 如 nodeData

执行安装配置环境
```
npm install express --save
```  
  
在nodeData文件下新建index.js文件，编辑代码
```
var express = require('express')
var app = new express()

app.use((req, res, next) => {
    res.append("Access-Control-Allow-Origin", "*")
    res.append("Access-Control-Allow-Headers", "*")
    next()
})

app.get('/banner', (req, res) => {
    res.json({
        data: '这是banner数据'
    })
})

app.listen(3000, () => {
    console.log('监听3000端口成功')
})  
```  

运行一下
```
node index.js
```
ok