/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 22:02:49
 * @LastEditors: 南岸有归
 * @Description: 标签操作层
 * @FilePath: \Blog-Server\src\controllers\Tag.ts
 * @
 */
import ServiceTag from "../service/Tag"
/**
 * @description: 标签列表操作类
 * @param {type} 
 * @return: 
 */
class ControllersTag{
    /**
     * @description: 获取标签列表返回
     * @param {type} 
     * @return: 
     */
    static async ControllersGetTagList(ctx:any,next:Function) {
        await ServiceTag.ServiceGetTagList()
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
}

export default ControllersTag

