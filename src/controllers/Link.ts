/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 14:51:43
 * @LastEditors: 南岸有归
 * @Description: 友情链接操作层
 * @FilePath: \admind:\react\Blog-Server\src\controllers\Link.ts
 * @
 */
import  {ServiceNewLink,ServiceDeleteLink,ServiceGetLinkList,ServiceUpdateLink} from "../service/Link"

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

export async function ControllersUpdateLink(ctx:any,next:any) {
    await ServiceUpdateLink(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res)=>{
            ctx.body={
                mess:'修改成功',
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                mess:'修改失败',
                code:1,
                err
            }
        })
    await next()
}
