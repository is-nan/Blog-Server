import sequelize from '../sql/index'
import * as Sequelize from "sequelize"
const Comment:any=sequelize.define('Comment',{
    //表id
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,//主键
        autoIncrement:true,//自增
        comment:'自增ID'
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        comment:'内容'
    },
    username:{
        type: Sequelize.STRING(100),
        allowNull: false,
        comment:'名称'
    },
    Avatar:{
        type: Sequelize.STRING(100),
        comment:'头像'
    },
    url:{
        type: Sequelize.STRING(100),
        comment:'地址'
    },
    email:{
        type: Sequelize.STRING(100),
        comment:'邮箱'
    },
    ArticleId:{
        type:Sequelize.INTEGER,
        comment:'文章ID'
    },
    CommentId:{
        type:Sequelize.INTEGER,
        comment:'留言ID'
    }
})

export default Comment
