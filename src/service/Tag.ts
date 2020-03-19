/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 22:00:32
 * @LastEditors: 南岸有归
 * @Description: 标签业务层
 * @FilePath: \Blog-Server\src\service\Tag.ts
 * @
 */
import Models from '../models/index'
import * as sequelize from "sequelize";
/**
 * @description: 标签业务类
 * @param {type} 
 * @return: 
 */
class ServiceTag{
    /**
     * @description: 获取所有标签列表,返回一个Promise
     * @param {type} 
     * @return: Promise
     */
    static ServiceGetTagList<T>(): Promise<T> {
        return Models.Tag.findAll(
                {attributes: ['TagName',[sequelize.fn('COUNT', sequelize.col('TagName')), 'count']],
                    group: 'TagName'
                })
        }
}

export default ServiceTag

