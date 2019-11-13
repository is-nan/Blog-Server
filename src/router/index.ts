import * as Router from 'koa-router'
import Article from './Article'
const router:any=new Router()
router.use('/api',Article.routes(),Article.allowedMethods())
export default router
