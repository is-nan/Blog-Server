import * as Router from 'koa-router'
import {ControllersNewLink,ControllersDeleteLink,ControllersGetLinkList} from "../controllers/Link";

const Link:any=new Router()

Link.post('/NewLink',ControllersNewLink)
Link.get('/GetLinkList',ControllersGetLinkList)
Link.post('/DeleteLink',ControllersDeleteLink)
export default Link
