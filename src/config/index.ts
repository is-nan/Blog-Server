/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 17:06:45
 * @LastEditors: 南岸有归
 * @Description: 配置文件
 * @FilePath: \webpackd:\react\Blog-Server\src\config\index.ts
 * @
 */
//Mysql配置TS接口
interface Mysql{
    database:string,
    username:string,
    password:string,
    host:string,
    port:number
}
// Jwt Token接口
interface Token {
    secret:string,//密钥
    expiresIn:string//token有效时间
}
export const ConfigJwt:Token={
    secret:'nayg',
    expiresIn:'48h'
}
export const Config:Mysql={
    database:'Blog',
    username:'root',
    password:'QWXP1208316514',
    host:'localhost',
    port:3306
}
