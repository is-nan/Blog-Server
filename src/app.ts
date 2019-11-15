import * as Koa from 'koa'
import * as KoaBody from 'koa-body'
import * as Koastatic from 'koa-static';
import * as koajwt from 'koa-jwt'
import router from './router/index'
import * as path from 'path'
import * as fs from 'fs'
const app:any = new Koa()
const staticPath:string='../images/'
app.use(Koastatic(
    path.join( __dirname, staticPath)
))
//jwt鉴权
// app.use(koajwt({
//     secret: 'nana'
// }).unless({
//     path: []
// }))
app.use(KoaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024	// 设置上传文件大小最大限制，默认2M
    }
}));
app.use(router.routes()).use(router.allowedMethods())
app.listen(9000)
console.log("Server running on port 9000")
