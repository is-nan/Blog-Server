/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:56:15
 * @LastEditors: 南岸有归
 * @Description: 友情链接数据模型
 * @FilePath: \admind:\react\Blog-Server\src\models\Link.ts
 * @
 */
import sequelize from '../sql/index'
import * as Sequelize from "sequelize"
const Link:any=sequelize.define('Link',{
    //表id
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,//主键
        autoIncrement:true,//自增
        comment:'自增ID'
    },
    name:{
        type:Sequelize.STRING(100),
        allowNull:false,//不允许为空
        comment:'名称'
    },
    url:{
        type:Sequelize.STRING(100),
        allowNull:false,
        comment:'地址'
    },
    email:{
        type: Sequelize.STRING(100),
        comment:'邮箱'
    }
})

export default Link
