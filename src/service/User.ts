/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 22:21:35
 * @LastEditors: 南岸有归
 * @Description: 用户业务层
 * @FilePath: \Blog-Server\src\service\User.ts
 * @
 */
import Models from '../models/index'
import  * as jwt from 'jsonwebtoken'
import { ConfigJwt } from "../config";
interface User{
    id:number,
    username:string,
    password:string,
    Token?:string
}
/**
 * @description: 用户登录业务类
 * @param {type} 
 * @return: 
 */
class ServiceUser{
    /**
     * @description: 登录,返回一个Promise
     * @param interface
     * @return: Promise
     */
    static async ServiceLogin<T>(ctx:any): Promise<T> {
        //数据库查询用户是否存在
        let User:any=await Models.User.findAll({where:{...ctx.request.body}})
        //获取到该用户的信息
        const Jwt:User=User.length>0?JSON.parse(JSON.stringify(User))[0]:null
        return new Promise((resolve: Function, reject: Function)=>{
            //查询到用户,并且用户Token字段不存在时
            if(Jwt!==null&&Jwt.Token==null){
                console.log('没有Token，生成一个Token，并且存入库中')
                //创建Token
                const Token:string=jwt.sign({
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
                console.log(Jwt)
                Models.User.update({Token:Token},{ where: { id: Jwt.id } })
                    .then((res:any)=>{
                        console.log(res)
                        resolve('登录成功')
                    }).catch((err:Error)=>{
                        console.log(err)
                        reject(err)
                })
            }
            //查询到用户并且该用户存在Token，验证Token是否有效，无效重新生成，有效继续使用
            else if(Jwt!==null&&Jwt.Token!==null){
                jwt.verify(Jwt.Token,ConfigJwt.secret,(err:Error,decoded)=>{
                    console.log(decoded)
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
                        const Token:string=jwt.sign({
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
                            .then((res:any)=>{
                                resolve('登录成功')
                            }).catch((err:Error)=>{
                            reject(err)
                        })
                    }
                })
            }else {
                reject('登录失败')
            }
        })
    }
}

export default ServiceUser