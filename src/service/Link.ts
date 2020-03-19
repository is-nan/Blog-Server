/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:53:19
 * @LastEditors: 南岸有归
 * @Description: 友情链接业务层
 * @FilePath: \admind:\react\Blog-Server\src\service\Link.ts
 * @
 */
import Models from '../models/index'

//新增友情链接
export  async function ServiceNewLink<T>(data: any): Promise<T> {
    return new Promise((resolve: any, reject: any)=>{
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

//获取友情链接
export async function ServiceGetLinkList() {
    return new Promise((resolve: any, reject: any)=>{
        resolve(Models.Link.findAll())
    })
}

//删除友情链接
export async function ServiceDeleteLink<T>(data: any): Promise<T> {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.id){
            reject('Id有误')
        }
        else {
            resolve(Models.Link.destroy({where: {id:data.id}}))
        }
    })
}

//修改友情链接
export async function ServiceUpdateLink<T>(data:any): Promise<T> {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.id){
            reject('Id有误')
        }else if(!data.name||!data.url){
            reject('博客名或博客链接有误')
        }
        else {
            resolve(Models.Link.update({name:data.name,url:data.url,email:data.email},{where: {id:data.id}}))
            resolve(Models.Article.update({status:data.status},{ where: { id: data.id } }))
        }
    })
}
