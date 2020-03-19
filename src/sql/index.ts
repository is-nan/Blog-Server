/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:54:50
 * @LastEditors: 南岸有归
 * @Description: sequelize-Mysql连接
 * @FilePath: \admind:\react\Blog-Server\src\sql\index.ts
 * @
 */
import { Sequelize } from 'sequelize'
import {Config} from '../config/index'
const sequelize=new Sequelize(
    //库-账号-密码
    Config.database,
    Config.username,
    Config.password,
    //连接配置
    {
        dialect:'mysql',
        host:Config.host,
        port:Config.port,
        pool: {
            max: 50,                             // 最大值
            min: 5,                          // 最小值
            acquire: 30000,           //
            idle: 10000                  // 闲时超时
        },
        // 没有数据库是否创建
        sync:{force:true}
    }
)
//连接测试
sequelize.authenticate().then(()=>{
    console.log('连接成功')
}).catch((err:any)=>{
    console.log(err)
    console.log('连接失败')
})
export default sequelize
