import Models from '../models/index'
import  * as jwt from 'jsonwebtoken'
export async function ServiceLogin(ctx:any) {
    let User:any;
    const data:any=ctx.request.body
    await Models.User.findAll({where:{id:1}}).then((res)=>{
        User=JSON.parse(JSON.stringify(res))[0]
    })
    return new Promise((resolve: any, reject: any)=>{
        if(User.username===data.username&&User.password===data.password){
           resolve('登录成功')
        }
        else {
            reject('登录失败')
        }
    })
}
