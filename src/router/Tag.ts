/*
 * @Author: 南岸有归
 * @Date: 2020-03-19 20:20:06
 * @LastEditTime: 2020-03-19 22:02:59
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \Blog-Server\src\router\Tag.ts
 * @
 */
import * as Router from 'koa-router'
import ControllersTag from "../controllers/Tag";

const Tag:any=new Router()
Tag.get('/GetTagList',ControllersTag.ControllersGetTagList)

export default Tag
