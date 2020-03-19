/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 14:53:10
 * @LastEditors: 南岸有归
 * @Description: 留言/评论业务层
 * @FilePath: \admind:\react\Blog-Server\src\service\Comment.ts
 * @
 */
import Models from '../models/index'
import * as Sequelize from "sequelize"
const Op = Sequelize.Op;
//新增留言
export async function ServiceNewComment(data:any) {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.content||!data.username){
            reject('内容或昵称有误')
        }
        else {
            resolve(Models.Comment.create({...data}))
        }
    })
}

//获取某文章评论
export async function ServiceGetArticleComment(data:any) {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.ArticleId){
            reject('参数错误')
        }
        else {
            resolve(
                Models.Comment.findAll({where:{ArticleId:data.ArticleId}})
            )
        }
    })
}

//获取所有文章评论
export async function ServiceGetAllArticleComment() {
    return new Promise((resolve: any, reject: any)=>{
        resolve(Models.Comment.findAll({where:{ArticleId:{[Op.ne]: null}}}))
    })
}

//获取博客留言
export async function ServiceGetComment() {
    return new Promise((resolve: any, reject: any)=>{
        resolve(Models.Comment.findAll({where:{ArticleId:null}}))
    })
}

//删除留言or评论
export async function ServiceDeleteComment(data:any) {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.id){
            reject('参数错误')
        }
        else {
            resolve(Models.Comment.destroy({where:{id:data.id}}))
        }
    })
}
