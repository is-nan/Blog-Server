import Models from '../models/index'
import  * as jwt from 'jsonwebtoken'
export async function ServiceLogin(data:any) {
    const User=await Models.User.findAll({where:{username:data.username,password:data.password}})
    return new Promise((resolve: any, reject: any)=>{
        if(User.length>0){
            resolve('登录成功')
        }else {
            reject('登录失败')
        }
    })
}
