import sequelize from '../sql/index'
import * as Sequelize from "sequelize"
import * as moment from "moment";
const Article:any=sequelize.define('Article',{
    //表id
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,//主键
        autoIncrement:true,//自增
        comment:'自增ID'
    },
    Cover:{
        type:Sequelize.STRING(255),
        comment:'封面'
    },
    title:{
        type:Sequelize.STRING(255),
        allowNull:false,//不允许为空
        comment:'标题'
    },
    Author:{
        type:Sequelize.STRING(20),
        allowNull:false,//不允许为空
        comment:'作者'
    },
    status:{
        type:Sequelize.INTEGER,
        defaultValue:1,//默认为发布状态 1.未完成 2.完成
        comment:'文章状态'
    },
    content:{
        type:Sequelize.TEXT,
        allowNull:false,//不允许为空
        comment:'内容'
    },
    createdTime:{
        type:Sequelize.DATE,
        allowNull:false,//不允许为空
        comment:'创建时间',
        get(){
            return moment(this.getDataValue('createdTime')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
})
export default Article
