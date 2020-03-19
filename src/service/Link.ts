/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 21:50:00
 * @LastEditors: 南岸有归
 * @Description: 友情链接业务层
 * @FilePath: \Blog-Server\src\service\Link.ts
 * @
 */
import Models from '../models/index'
/**
 * @description: 博客友情链接业务层类
 * @param {type} 
 * @return: 
 */
//新增友情链接接口类型
interface LinkInterface{
    id:number,
    name:string,
    url:string,
    email:string
}
//删除友情链接接口类型
interface LinkIdInterface{
    id:number
}
class ServiceLink{
    /**
     * @description: 新增博客友情链接,返回一个Promise
     * @param LinkInterface
     * @return: Promise
     */    
    static ServiceNewLink<T>(data: LinkInterface): Promise<T> {
    return new Promise((resolve: Function, reject: Function)=>{
        if(!data.name||!data.url){
            reject('参数错误')
        }
        else {
            resolve(
                Models.Link.create({...data})
            )
        }
    })
}
/**
 * @description: 获取友情链接,返回一个Promise
 * @param {type} 
 * @return: Promise
 */    
static ServiceGetLinkList() {
    return Models.Link.findAll()
}
/**
 * @description: 删除友情链接,返回一个Promise
 * @param LinkIdInterface
 * @return: LinkIdInterface
 */
static ServiceDeleteLink<T>(data: LinkIdInterface): Promise<T> {
    return new Promise((resolve: Function, reject: Function)=>{
        if(!data.id){
            reject('Id有误')
        }
        else {
            resolve(Models.Link.destroy({where: {id:data.id}}))
        }
    })
}
/**
 * @description: 修改友情链接,返回一个Promise
 * @param LinkInterface
 * @return: Promise
 */
static ServiceUpdateLink<T>(data:LinkInterface): Promise<T> {
    return new Promise((resolve: Function, reject: Function)=>{
        if(!data.id){
            reject('Id有误')
        }else if(!data.name||!data.url){
            reject('博客名或博客链接有误')
        }
        else {
            resolve(Models.Link.update({name:data.name,url:data.url,email:data.email},{where: {id:data.id}}))
        }
    })
}
}


export default ServiceLink