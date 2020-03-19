/*
 * @Author: 南岸有归
 * @Date: 2020-03-19 20:20:06
 * @LastEditTime: 2020-03-19 20:48:36
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \Blog-Server\src\router\Article.ts
 * @
 */
import * as Router from 'koa-router'
import ControllersArticle from "../controllers/Article";
const Article:any=new Router()


Article
.post('/NewArticle',ControllersArticle.ControllersNewArticle)
.get('/GetReleaseArticle',ControllersArticle.ControllersGetReleaseArticle)
.get('/GetArticle',ControllersArticle.ControllersGetArticle)
.post('/UpdateArticleStatus',ControllersArticle.ControllersUpdateArticleStatus)
.post('/UpdateArticle',ControllersArticle.ControllersUpdateArticle)
.post('/DeleteArticle',ControllersArticle.ControllersDeleteArticle)
.post('/UploadImages',ControllersArticle.ControllersUploadImages)
export default Article
