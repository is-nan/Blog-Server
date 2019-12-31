import * as Router from 'koa-router'
import { ControllersNewArticle,ControllersGetReleaseArticle,
    ControllersGetArticle,ControllersDeleteArticle,
    ControllersUploadImages,ControllersUpdateArticleStatus,
    ControllersUpdateArticle} from "../controllers/Article";
const Article:any=new Router()


Article.post('/NewArticle',ControllersNewArticle)
Article.get('/GetReleaseArticle',ControllersGetReleaseArticle)
Article.get('/GetArticle',ControllersGetArticle)
Article.post('/UpdateArticleStatus',ControllersUpdateArticleStatus)
Article.post('/UpdateArticle',ControllersUpdateArticle)
Article.post('/DeleteArticle',ControllersDeleteArticle)
Article.post('/UploadImages',ControllersUploadImages)
export default Article
