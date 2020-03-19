/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 21:08:57
 * @LastEditors: 南岸有归
 * @Description: 分类业务层
 * @FilePath: \Blog-Server\src\service\Category.ts
 * @
 */
import Models from '../models/index'
import * as sequelize from 'sequelize'
/**
 * @description: 文字分类业务层类
 * @param {type} 
 * @return: 
 */
class ServiceCategory {
    /**
 * @description:获取文章分类列表
 * @param {type} 
 * @return: 
 */
    static ServiceGetCategoryList<T>(): Promise<T> {
        return Models.Category.findAll(
            {
                attributes: ['CategoryName', [sequelize.fn('COUNT', sequelize.col('CategoryName')), 'count']],
                group: 'CategoryName'
            })
    }
}

export default ServiceCategory

