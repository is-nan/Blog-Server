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
