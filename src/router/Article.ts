import * as Router from 'koa-router'
import { ControllersNewArticle,ControllersGetReleaseArticle,
    ControllersGetArticle,ControllersDeleteArticle } from "../controllers/Article";
const Article:any=new Router()


Article.post('/NewArticle',ControllersNewArticle)
Article.get('/GetReleaseArticle',ControllersGetReleaseArticle)
Article.get('/GetArticle',ControllersGetArticle)
Article.post('/DeleteArticle',ControllersDeleteArticle)
export default Article
