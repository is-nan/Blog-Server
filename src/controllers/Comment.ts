/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 21:34:39
 * @LastEditors: 南岸有归
 * @Description: 留言/评论操作层
 * @FilePath: \Blog-Server\src\controllers\Comment.ts
 * @
 */
import ServiceComment from '../service/Comment'
/**
 * @description: 博客留言AND文章评论操作类
 * @param {type} 
 * @return: 
 */
class ControllerComment{
    /**
     * @description: 新增留言AND文章评论返回
     * @param {type} 
     * @return: 
     */
    static async ControllersNewComment(ctx:any,next:Function) {
        await ServiceComment.ServiceNewComment(ctx.request.body)
            .then((Promise)=>{
                return  Promise
            })
            .then((res:any)=>{
                ctx.body={
                    code:0,
                    mess:'新增成功'
                }
            })
            .catch((err:string|Error)=>{
                ctx.body={
                    code:1,
                    mess:'新增失败',
                    err
                }
            })
        await next()
    }
    /**
     * @description: 获取某文章评论返回
     * @param {type} 
     * @return: 
     */
    static async ControllersGetArticleComment(ctx:any,next:Function) {
        await ServiceComment.ServiceGetArticleComment(ctx.request.body)
            .then((Promise)=>{
                return Promise
            })
            .then((res:any)=>{
                ctx.body={
                    data:res,
                    mess:'获取成功',
                    code:0
                }
            })
            .catch((err:string|Error)=>{
                ctx.body={
                    code:1,
                    mess:'获取失败',
                    err
                }
            })
        await next()
    }
/**
 * @description: 获取所有文章评论返回
 * @param {type} 
 * @return: 
 */    
static async ControllersGetAllArticleComment(ctx:any,next:Function) {
    await ServiceComment.ServiceGetAllArticleComment()
        .then((res:any)=>{
            ctx.body={
                code:0,
                mess:'获取成功',
                data:res
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                code:1,
                mess:'获取失败',
                err
            }
        })
}
/**
 * @description: 获取博客留言返回
 * @param {type} 
 * @return: 
 */
static async  ControllersGetComment(ctx:any,next:Function) {
    await ServiceComment.ServiceGetComment()
        .then((res:any)=>{
            ctx.body={
                code:0,
                mess:'获取成功',
                data:res
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                code:1,
                mess:'获取失败',
                err
            }
        })
    await next()
}
/**
 * @description: 删除某博客留言or删除某文章评论返回
 * @param {type} 
 * @return: 
 */
static async ControllersDeleteComment(ctx:any,next:Function) {
    await ServiceComment.ServiceDeleteComment(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res:any)=>{
            ctx.body={
                code:0,
                mess:'删除成功'
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                code:1,
                mess:'删除失败',
                err
            }
        })
}
}

export default ControllerComment
