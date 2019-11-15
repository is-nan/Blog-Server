import * as Router from 'koa-router'
import { ControllersGetTagList } from "../controllers/Tag";

const Tag:any=new Router()
Tag.get('/GetTagList',ControllersGetTagList)

export default Tag
