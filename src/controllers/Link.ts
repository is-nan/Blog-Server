import  {ServiceNewLink,ServiceDeleteLink,ServiceGetLinkList} from "../service/Link"

export async function ControllersNewLink(ctx:any,next:any){
   await ServiceNewLink(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res)=>{
            ctx.body={
                mess:'新增成功',
                code:0
            }
        }).catch((err)=>{
            ctx.body={
                mess:'新增失败',
                err,
                code:1
            }
    })
    await next()
}

export async function ControllersGetLinkList(ctx:any,next:any) {
    await ServiceGetLinkList()
        .then((res)=>{
            ctx.body={
                code:0,
                mess:'获取成功',
                data:res
            }
        }).catch((err)=>{
            ctx.body={
                code:1,
                mess:'获取失败'
            }
        })
    await next()
}

export async function ControllersDeleteLink(ctx:any,next:any) {
    await ServiceDeleteLink(ctx.request.body)
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
                code:1,
                err
            }
        })
    await next()
}
