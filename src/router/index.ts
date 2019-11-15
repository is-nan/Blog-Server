import * as Router from 'koa-router'
import Article from './Article'
import Link from "./Link"
import Tag from "./Tag"
import Category from './Category'
import Comment from "./Comment"
import User from "./User"
const router:any=new Router()
router.use('/api',Article.routes(),Article.allowedMethods())
router.use('/api',Link.routes(),Link.allowedMethods())
router.use('/api',Tag.routes(),Tag.allowedMethods())
router.use('/api',Category.routes(),Category.allowedMethods())
router.use('/api',Comment.routes(),Comment.allowedMethods())
router.use('/api',User.routes(),User.allowedMethods())
export default router
