import {ServiceLogin} from "../service/User"

export async function ControllersLogin(ctx:any,next:any) {
    await ServiceLogin(ctx.request.body)
        .then((res)=>{
            ctx.body={
                mess:res,
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                mess:'登录失败',
                code:1
            }
        })
    await next()
}
