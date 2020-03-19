/*
 * @Author: 南岸有归
 * @Date: 2020-03-19 20:20:06
 * @LastEditTime: 2020-03-19 21:35:52
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \Blog-Server\src\router\Comment.ts
 * @
 */
import ControllerComment from "../controllers/Comment"
import * as Router from 'koa-router'

const Comment:any=new Router()
Comment
.post('/NewComment',ControllerComment.ControllersNewComment)
.post('/GetArticleComment',ControllerComment.ControllersGetArticleComment)
.get('/GetComment',ControllerComment.ControllersGetComment)
.post('/DeleteComment',ControllerComment.ControllersDeleteComment)
.get('/GetAllArticleComment',ControllerComment.ControllersGetAllArticleComment)
export default Comment
