/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:56:25
 * @LastEditors: 南岸有归
 * @Description: 标签数据模型
 * @FilePath: \admind:\react\Blog-Server\src\models\Tag.ts
 * @
 */
import sequelize from '../sql/index'
import * as Sequelize from "sequelize"
const Tag:any=sequelize.define('Tag',{
    //表id
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,//主键
        autoIncrement:true,//自增
        comment:'自增ID'
    },
    TagName:{
        type:Sequelize.STRING(100),
        allowNull:false,//不允许为空
        comment:'标签名'
    }
})

export default Tag
