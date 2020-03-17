import { ControllersNewComment,ControllersGetArticleComment,ControllersGetComment,
    ControllersDeleteComment,ControllersGetAllArticleComment} from "../controllers/Comment"
import * as Router from 'koa-router'

const Comment:any=new Router()
Comment.post('/NewComment',ControllersNewComment)
Comment.post('/GetArticleComment',ControllersGetArticleComment)
Comment.get('/GetComment',ControllersGetComment)
Comment.post('/DeleteComment',ControllersDeleteComment)
Comment.get('/GetAllArticleComment',ControllersGetAllArticleComment)
export default Comment
