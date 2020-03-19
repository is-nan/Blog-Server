import * as Router from 'koa-router'
import {ControllersNewLink,ControllersDeleteLink,ControllersGetLinkList,ControllersUpdateLink} from "../controllers/Link";

const Link:any=new Router()

Link
.post('/NewLink',ControllersNewLink)
.get('/GetLinkList',ControllersGetLinkList)
.post('/DeleteLink',ControllersDeleteLink)
.post('/UpdateLink',ControllersUpdateLink)
export default Link
