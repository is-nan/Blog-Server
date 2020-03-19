/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 21:56:14
 * @LastEditors: 南岸有归
 * @Description: 友情链接操作层
 * @FilePath: \Blog-Server\src\controllers\Link.ts
 * @
 */
import  ServiceLink from "../service/Link"
/**
 * @description: 友情链接操作类
 * @param {type} 
 * @return: 
 */
class ControllerLink{
/**
 * @description: 新增友情链接返回
 * @param {type} 
 * @return: 
 */    
static async ControllersNewLink(ctx:any,next:Function){
    await ServiceLink.ServiceNewLink(ctx.request.body)
         .then((Promise)=>{
             return Promise
         })
         .then((res:any)=>{
             ctx.body={
                 mess:'新增成功',
                 code:0
             }
         }).catch((err:string|Error)=>{
             ctx.body={
                 mess:'新增失败',
                 err,
                 code:1
             }
     })
     await next()
 }
/**
 * @description: 获取友情链接返回
 * @param {type} 
 * @return: 
 */ 
static async ControllersGetLinkList(ctx:any,next:Function) {
    await ServiceLink.ServiceGetLinkList()
        .then((res:any)=>{
            ctx.body={
                code:0,
                mess:'获取成功',
                data:res
            }
        }).catch((err:string|Error)=>{
            ctx.body={
                code:1,
                mess:'获取失败'
            }
        })
    await next()
}
/**
 * @description: 删除友情链接返回
 * @param {type} 
 * @return: 
 */
static async ControllersDeleteLink(ctx:any,next:Function) {
    await ServiceLink.ServiceDeleteLink(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res:any)=>{
            ctx.body={
                mess:'删除成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                mess:'删除失败',
                code:1,
                err
            }
        })
    await next()
}
/**
 * @description: 修改友情链接返回
 * @param {type} 
 * @return: 
 */

static async ControllersUpdateLink(ctx:any,next:Function) {
    await ServiceLink.ServiceUpdateLink(ctx.request.body)
        .then((Promise)=>{
            return Promise
        })
        .then((res:any)=>{
            ctx.body={
                mess:'修改成功',
                code:0
            }
        })
        .catch((err:string|Error)=>{
            ctx.body={
                mess:'修改失败',
                code:1,
                err
            }
        })
    await next()
}
}

export default ControllerLink