/*
 * @Author: 南岸有归
 * @Date: 2020-03-19 20:20:06
 * @LastEditTime: 2020-03-19 20:59:45
 * @LastEditors: 南岸有归
 * @Description: 
 * @FilePath: \Blog-Server\src\router\Category.ts
 * @
 */
import ControllersCategory from "../controllers/Category";
import * as Router from 'koa-router'

const Category:any=new Router()
Category
.get('/GetCategoryList',ControllersCategory.ControllersGetCategoryList)
export default Category
