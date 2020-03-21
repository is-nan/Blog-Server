/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:10
 * @LastEditTime: 2020-03-19 21:39:13
 * @LastEditors: 南岸有归
 * @Description: 留言/评论业务层
 * @FilePath: \Blog-Server\src\service\Comment.ts
 * @
 */
import Models from '../models/index'
import * as Sequelize from "sequelize"
const Op = Sequelize.Op;

//新增留言/评论接口类型
interface CommentInterface{
    id?:number,
    content:string,
    username:string,
    Avatar?:string,
    url:string,
    email:string,
    ArticleId?:number,
    CommentId?:number
}
//获取某文章评论接口类型
interface CommentArticleIdInterface{
    ArticleId:number
}
//删除某评论/留言接口类型
interface CommentIdInterface{
    id:number
}
/**
 * @description: 文章留言/评论业务层类
 * @param {type} 
 * @return: 
 */
class ServiceComment{
    /**
 * @description: 新增留言/评论,返回一个Promise
 * @param CommentInterface
 * @return: Promise
 */
    static ServiceNewComment<T>(data:CommentInterface): Promise<T> {
        return new Promise((resolve: Function, reject: Function)=>{
            if(!data.content||!data.username){
                reject('内容或昵称有误')
            }
            else {
                resolve(Models.Comment.create({...data}))
            }
        })
    }
    /**
     * @description: 获取某文章评论,返回一个Promise
     * @param CommentArticleIdInterface
     * @return: Promise
     */
    static ServiceGetArticleComment<T>(data:CommentArticleIdInterface): Promise<T> {
    return new Promise((resolve: Function, reject: Function)=>{
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
/**
 * @description: 获取所有文章评论,返回一个Promise
 * @param {type} 
 * @return: Promise
 */   
static  ServiceGetAllArticleComment<T>(): Promise<T> {
    return Models.Comment.findAll({where:{ArticleId:{[Op.ne]: null}}})
}
/**
 * @description: 获取博客留言,返回一个Promise
 * @param {type} 
 * @return: Promise
 */
static ServiceGetComment<T>(): Promise<T> {
    return Models.Comment.findAll({where:{ArticleId:null}})
}
/**
 * @description: 删除某文章评论or删除某留言,返回一个
 * @param CommentIdInterface 
 * @return: Promise
 */
static ServiceDeleteComment<T>(data:CommentIdInterface): Promise<T> {
    return new Promise((resolve: Function, reject: Function)=>{
        if(!data.id){
            reject('参数错误')
        }
        else {
            resolve(Models.Comment.destroy({where:{id:data.id}}))
        }
    })
}
}

export default ServiceComment