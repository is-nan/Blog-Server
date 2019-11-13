import * as Koa from 'koa'
import *as KoaBody from 'koa-body'
import router from './router/index'
const app = new Koa()
app.use(KoaBody())
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log("Server running on port 3000")
