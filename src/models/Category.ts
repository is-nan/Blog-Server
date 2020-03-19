/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:55:42
 * @LastEditors: 南岸有归
 * @Description: 分类数据模型
 * @FilePath: \admind:\react\Blog-Server\src\models\Category.ts
 * @
 */
import sequelize from '../sql/index'
import * as Sequelize from "sequelize"
const Category:any=sequelize.define('Category',{
    //表id
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,//主键
        autoIncrement:true,//自增
        comment:'自增ID'
    },
    CategoryName:{
        type:Sequelize.STRING(100),
        allowNull:false,//不允许为空
        comment:'分类名称'
    }
})

export default Category
