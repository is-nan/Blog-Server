import Models from '../models/index'
import * as sequelize from 'sequelize'
//获取分类列表
export async function ServiceGetCategoryList() {
    return new Promise((resolve: any, reject: any)=>{
        resolve(Models.Category.findAll(
            {attributes: ['CategoryName',[sequelize.fn('COUNT', sequelize.col('CategoryName')), 'count']],
                group: 'CategoryName'
            }))
    })
}
