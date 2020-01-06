import * as Router from 'koa-router'
import {ControllersNewLink,ControllersDeleteLink,ControllersGetLinkList,ControllersUpdateLink} from "../controllers/Link";

const Link:any=new Router()

Link.post('/NewLink',ControllersNewLink)
Link.get('/GetLinkList',ControllersGetLinkList)
Link.post('/DeleteLink',ControllersDeleteLink)
Link.post('/UpdateLink',ControllersUpdateLink)
export default Link
