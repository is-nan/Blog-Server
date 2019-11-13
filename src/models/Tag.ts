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
