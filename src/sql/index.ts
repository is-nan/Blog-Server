import { Sequelize } from 'sequelize'
import config from '../config/index'
const sequelize=new Sequelize(
    //库-账号-密码
    config.database,
    config.username,
    config.password,
    //连接配置
    {
        dialect:'mysql',
        host:config.host,
        port:config.port,
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
