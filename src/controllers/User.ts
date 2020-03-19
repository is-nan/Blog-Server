/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 22:18:10
 * @LastEditors: 南岸有归
 * @Description: 用户操作层
 * @FilePath: \Blog-Server\src\controllers\User.ts
 * @
 */
import ServiceUser from "../service/User"
/**
 * @description: 登录操作类
 * @param {type} 
 * @return: 
 */
class ControllerUser{
    static async ControllersLogin(ctx:any,next:Function) {
        await ServiceUser.ServiceLogin(ctx)
            .then((res:any)=>{
                ctx.body={
                    mess:res,
                    code:0
                }
            })
            .catch((err:string|Error)=>{
                ctx.body={
                    mess:'登录失败',
                    code:1,
                    err
                }
            })
        await next()
    }
}

export default ControllerUser
