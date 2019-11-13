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
