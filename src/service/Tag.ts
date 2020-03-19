/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:53:26
 * @LastEditors: 南岸有归
 * @Description: 标签业务层
 * @FilePath: \admind:\react\Blog-Server\src\service\Tag.ts
 * @
 */
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
