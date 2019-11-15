import {ControllersGetCategoryList} from "../controllers/Category";
import * as Router from 'koa-router'

const Category:any=new Router()
Category.get('/GetCategoryList',ControllersGetCategoryList)
export default Category
