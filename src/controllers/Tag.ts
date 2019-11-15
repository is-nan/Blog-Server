import { ServiceGetTagList } from "../service/Tag"

export async function ControllersGetTagList(ctx:any,next:any) {
    await ServiceGetTagList()
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
                mess:'获取失败',
                err
            }
        })
    await next()
}
