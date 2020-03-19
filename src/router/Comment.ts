import { ControllersNewComment,ControllersGetArticleComment,ControllersGetComment,
    ControllersDeleteComment,ControllersGetAllArticleComment} from "../controllers/Comment"
import * as Router from 'koa-router'

const Comment:any=new Router()
Comment
.post('/NewComment',ControllersNewComment)
.post('/GetArticleComment',ControllersGetArticleComment)
.get('/GetComment',ControllersGetComment)
.post('/DeleteComment',ControllersDeleteComment)
.get('/GetAllArticleComment',ControllersGetAllArticleComment)
export default Comment
