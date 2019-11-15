import { ServiceNewComment,ServiceGetArticleComment,ServiceGetComment,ServiceDeleteComment} from '../service/Comment'

export async function ControllersNewComment(ctx:any,next:any) {
    await ServiceNewComment(ctx.request.body)
        .then((Promise)=>{
            return  Promise
        })
        .then((res)=>{
            ctx.body={
                code:0,
                mess:'新增成功'
            }
        })
        .catch((err)=>{
            ctx.body={
                code:1,
                mess:'新增失败'
            }
        })
    await next()
}
export async function ControllersGetArticleComment(ctx:any,next:any) {
    await ServiceGetArticleComment(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res)=>{
            ctx.body={
                data:res,
                mess:'获取成功',
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                code:1,
                mess:'获取失败',
                err
            }
        })
    await next()
}

export async function ControllersGetComment(ctx:any,next:any) {
    await ServiceGetComment()
        .then((res)=>{
            ctx.body={
                code:0,
                mess:'获取成功',
                data:res
            }
        })
        .catch((err)=>{
            ctx.body={
                code:1,
                mess:'获取失败'
            }
        })
    await next()
}

export async function ControllersDeleteComment(ctx:any,next:any) {
    await ServiceDeleteComment(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res)=>{
            ctx.body={
                code:0,
                mess:'删除成功'
            }
        })
        .catch((err)=>{
            ctx.body={
                code:1,
                mess:'删除失败',
                err
            }
        })
}
