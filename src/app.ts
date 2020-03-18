import * as Koa from 'koa'
import * as KoaBody from 'koa-body'
import * as Koastatic from 'koa-static';
import * as koajwt from 'koa-jwt'
import router from './router/index'
import * as path from 'path'
import * as fs from 'fs'
import {ConfigJwt} from "./config";
import { accessLogger,systemLogger } from "./log";
import * as log4js from 'koa-log4'
const app:any = new Koa()
const staticPath:string='../images/'
app.use(Koastatic(
    path.join( __dirname, staticPath)
))
//访问日志
app.use(accessLogger())
//系统日志
app.on('error',err=>{log4js.error(err)})
//jwt鉴权/不需要tokne验证的接口
app.use(koajwt({
    secret: ConfigJwt.secret
}).unless({
    path: [/^\/api\/GetReleaseArticle/,/^\/api\/GetCategoryList/,/^\/api\/GetArticleComment/,/^\/api\/GetComment/,
        /^\/api\/GetLinkList/,/^\/api\/GetTagList/,/^\/api\/NewComment/,/^\/api\/UserLogin/]
}))
//自定义访问中间件
app.use(async (ctx, next) => {
    // 判断访问路径 例如 如果 URL 是 'api/' 则next执行 让koa-router处理，输出数据
    // 如果不是 ，则交由nuxt 的vue-router来处理判断并返回显示页面
    if (/api\//.test(ctx.request.url)) {
        await next()
    }
})
app.use(KoaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024	// 设置上传文件大小最大限制，默认2M
    }
}));
app.use(router.routes()).use(router.allowedMethods())
app.listen(9000)
console.log("Server running on port 9000")
