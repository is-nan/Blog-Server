import {ServiceNewArticle,ServiceGetReleaseArticleList,
    ServiceGetArticleList,ServiceDeleteArticle} from "../service/Article"

export async function ControllersNewArticle(ctx:any,next) {
    await ServiceNewArticle(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res)=>{
            ctx.body={
                mess:'新增成功',
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                err,
                code:1,
                mess:'新增失败'
            }
        })
    await next()
}
export async function ControllersGetReleaseArticle(ctx:any,next:any) {
    await ServiceGetReleaseArticleList()
        .then((res)=>{
            ctx.body={
                data:res,
                mess:'获取成功',
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                err,
                mess:'获取失败',
                code:0
            }
        })
    await next()
}
export async function ControllersGetArticle(ctx:any,next:any) {
    await ServiceGetArticleList()
        .then((res)=>{
            ctx.body={
                data:res,
                mess:'获取成功',
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                err,
                mess:'获取失败',
                code:0
            }
        })
    await next()
}
export async function ControllersDeleteArticle(ctx:any,next:any) {
    await ServiceDeleteArticle(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res)=>{
            ctx.body={
                mess:'删除成功',
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                mess:'删除失败',
                err,
                code:1
            }
        })
}
