/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:52:47
 * @LastEditors: 南岸有归
 * @Description: 分类业务层
 * @FilePath: \admind:\react\Blog-Server\src\service\Category.ts
 * @
 */
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
