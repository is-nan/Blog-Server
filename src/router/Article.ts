import * as Router from 'koa-router'
import { ControllersNewArticle,ControllersGetReleaseArticle,
    ControllersGetArticle,ControllersDeleteArticle,
    ControllersUploadImages,ControllersUpdateArticleStatus,
    ControllersUpdateArticle} from "../controllers/Article";
const Article:any=new Router()


Article
.post('/NewArticle',ControllersNewArticle)
.get('/GetReleaseArticle',ControllersGetReleaseArticle)
.get('/GetArticle',ControllersGetArticle)
.post('/UpdateArticleStatus',ControllersUpdateArticleStatus)
.post('/UpdateArticle',ControllersUpdateArticle)
.post('/DeleteArticle',ControllersDeleteArticle)
.post('/UploadImages',ControllersUploadImages)
export default Article
