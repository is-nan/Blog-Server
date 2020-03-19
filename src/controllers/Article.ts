/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 18:23:12
 * @LastEditors: 南岸有归
 * @Description: 文章操作层
 * @FilePath: \webpackd:\react\Blog-Server\src\controllers\Article.ts
 * @
 */




import {ServiceNewArticle,ServiceGetReleaseArticleList,
    ServiceGetArticleList,ServiceDeleteArticle,ServiceUploadImages,
    ServiceUpdateArticleStatus,ServiceUpdateArticle} from "../service/Article"
import Article from '../service/Article'
export async function ControllersNewArticle(ctx:any,next:Function) {
    await Article.ServiceNewArticle(ctx.request.body)
        .then((Promise)=>{
            console.log(Promise)
            return Promise
        })
        .then((res:any)=>{
            ctx.body={
                mess:'新增成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                err,
                code:1,
                mess:'新增失败'
            }
        })
    await next()
}

export async function ControllersGetReleaseArticle(ctx:any,next:Function) {
    await Article.ServiceGetReleaseArticleList()
        .then((res:any)=>{
            ctx.body={
                data:res,
                mess:'获取成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                err,
                mess:'获取失败',
                code:1
            }
        })
    await next()
}
export async function ControllersGetArticle(ctx:any,next:Function) {
    await Article.ServiceGetArticleList()
        .then((res:any)=>{
            ctx.body={
                data:res,
                mess:'获取成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                err,
                mess:'获取失败',
                code:1
            }
        })
    await next()
}

export async function ControllersUpdateArticleStatus(ctx:any,next:Function) {
    await Article.ServiceUpdateArticleStatus(ctx.request.body)
        .then((Promise:any)=>{
            return Promise
        })
        .then((res:any)=>{
            ctx.body={
                mess:'修改成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                mess:'修改失败',
                err,
                code:1
            }
        })
    await next()
}

export async function ControllersUpdateArticle(ctx:any,next:Function) {
    await Article.ServiceUpdateArticle(ctx.request.body)
        .then((Promise:any)=>{
            return Promise
        })
        .then((res:any)=>{
            ctx.body={
                mess:'修改成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                mess:'修改失败',
                err,
                code:1
            }
        })
    await next()
}

export async function ControllersDeleteArticle(ctx:any,next:Function) {
    await Article.ServiceDeleteArticle(ctx.request.body)
        .then((Promise:any)=>{
            return Promise
        })
        .then((res:any)=>{
            ctx.body={
                mess:'删除成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                mess:'删除失败',
                err,
                code:1
            }
        })
    await next()
}
export async function ControllersUploadImages(ctx:any,next:any){
  await  Article.ServiceUploadImages(ctx.request.files.file)
        .then((res:any)=>{
            ctx.body={
                data:res,
                mess:'上传成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                err,
                mess:'上传失败',
                code:1
            }
        })
    await next()
}
