/*
 * @Author: 南岸有归
 * @Date: 2020-03-19 20:20:06
 * @LastEditTime: 2020-03-19 22:12:02
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \Blog-Server\src\router\User.ts
 * @
 */
import ControllerUser from "../controllers/User"
import * as Router from 'koa-router'
const User:any=new Router()
User.post('/UserLogin',ControllerUser.ControllersLogin)
export  default User
