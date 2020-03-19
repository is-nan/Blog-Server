/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 14:52:04
 * @LastEditors: 南岸有归
 * @Description: 用户操作层
 * @FilePath: \admind:\react\Blog-Server\src\controllers\User.ts
 * @
 */
import {ServiceLogin} from "../service/User"

export async function ControllersLogin(ctx:any,next:any) {
    await ServiceLogin(ctx)
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
