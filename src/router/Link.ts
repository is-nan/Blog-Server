/*
 * @Author: 南岸有归
 * @Date: 2020-03-19 20:20:06
 * @LastEditTime: 2020-03-19 21:56:37
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \Blog-Server\src\router\Link.ts
 * @
 */
import * as Router from 'koa-router'
import ControllerLink from "../controllers/Link";

const Link:any=new Router()

Link
.post('/NewLink',ControllerLink.ControllersNewLink)
.get('/GetLinkList',ControllerLink.ControllersGetLinkList)
.post('/DeleteLink',ControllerLink.ControllersDeleteLink)
.post('/UpdateLink',ControllerLink.ControllersUpdateLink)
export default Link
