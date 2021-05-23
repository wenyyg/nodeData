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