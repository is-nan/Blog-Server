import { ControllersNewComment,ControllersGetArticleComment,ControllersGetComment,
    ControllersDeleteComment} from "../controllers/Comment"
import * as Router from 'koa-router'

const Comment:any=new Router()
Comment.post('/NewComment',ControllersNewComment)
Comment.post('/GetArticleComment',ControllersGetArticleComment)
Comment.get('/GetComment',ControllersGetComment)
Comment.post('/DeleteComment',ControllersDeleteComment)
export default Comment
