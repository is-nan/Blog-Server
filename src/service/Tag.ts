import Models from '../models/index'
import * as sequelize from "sequelize";

//获取标签列表
export async function ServiceGetTagList() {
    return  new Promise((resolve: any, reject: any)=>{
        resolve(Models.Tag.findAll(
            {attributes: ['TagName',[sequelize.fn('COUNT', sequelize.col('TagName')), 'count']],
                group: 'TagName'
            }))
    })
}
