import Models from '../models/index'
import  * as jwt from 'jsonwebtoken'
import { ConfigJwt } from "../config";

export async function ServiceLogin(ctx:any) {
    //数据库查询用户是否存在
    let User=await Models.User.findAll({where:{...ctx.request.body}})
    //获取到该用户的信息
    const Jwt=User.length>0?JSON.parse(JSON.stringify(User))[0]:null
    return new Promise((resolve: any, reject: any)=>{
        //查询到用户,并且用户Token字段不存在时
        if(Jwt!==null&&Jwt.Token==null){
            console.log('没有Token，生成一个Token，并且存入库中')
            //创建Token
            const Token=jwt.sign({
                username:Jwt.username,
                id:Jwt.id
            },ConfigJwt.secret,{expiresIn:ConfigJwt.expiresIn})
            //存储至浏览器cookie
            ctx.cookies.set(
                'www.nanbk.com_token',
                Token
                ,{
                    path:'/',
                    maxAge:10*60*99999,
                    expires:new Date('2030-01-1'),
                    httpOnly: false,
                    overwrite: false
                })
            //将Token存储在该用户Token字段中
            Models.User.update({Token:Token},{ where: { id: Jwt.id } })
                .then((res)=>{
                    console.log(res)
                    resolve('登录成功')
                }).catch((err)=>{
                    console.log(err)
                    reject('登录失败')
            })
        }
        //查询到用户并且该用户存在Token，验证Token是否有效，无效重新生成，有效继续使用
        else if(Jwt!==null&&Jwt.Token!==null){
            jwt.verify(Jwt.Token,ConfigJwt.secret,(err,decoded)=>{
                if(decoded){
                    //存储至浏览器cookie
                    ctx.cookies.set(
                        'www.nanbk.com_token',
                        Jwt.Token
                        ,{
                            path:'/',
                            maxAge:10*60*99999,
                            expires:new Date('2030-01-1'),
                            httpOnly: false,
                            overwrite: false
                        })
                    resolve('登录成功')
                }else {
                    console.log('Token失效,重新生成Token')
                    //创建Token
                    const Token=jwt.sign({
                        username:Jwt.username,
                        id:Jwt.id
                    },ConfigJwt.secret,{expiresIn:ConfigJwt.expiresIn})
                    //存储至浏览器cookie
                    ctx.cookies.set(
                        'www.nanbk.com_token',
                        Token
                        ,{
                            path:'/',
                            maxAge:10*60*99999,
                            expires:new Date('2030-01-1'),
                            httpOnly: false,
                            overwrite: false
                        })
                    //将Token存储在该用户Token字段中
                    Models.User.update({Token:Token},{ where: { id: Jwt.id } })
                        .then((res)=>{
                            console.log(res)
                            resolve('登录成功')
                        }).catch((err)=>{
                        console.log(err)
                        reject('登录失败')
                    })
                }
            })
        }else {
            reject('登录失败')
        }
    })
}
