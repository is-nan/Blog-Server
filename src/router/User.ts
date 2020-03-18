import {ControllersLogin} from "../controllers/User"
import * as Router from 'koa-router'
const User:any=new Router()
User.post('/UserLogin',ControllersLogin)
export  default User
