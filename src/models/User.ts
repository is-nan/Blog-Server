import sequelize from '../sql/index'
import * as Sequelize from "sequelize"
const User:any=sequelize.define('User',{
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
    username:{
        type:Sequelize.STRING(20),
        allowNull:false,//不允许为空
        comment:'用户名'
    },
    Token:{
        type:Sequelize.STRING(200),
        comment:'Token鉴权验证'
    },
    password:{
        type:Sequelize.STRING(16),
        allowNull:false,//不允许为空
        comment:'密码'
    },
    role:{
        type:Sequelize.TINYINT,
        allowNull:false,//不允许为空
        comment:'0/管理员,1/用户',
        defaultValue:1
    }
})

export default User
