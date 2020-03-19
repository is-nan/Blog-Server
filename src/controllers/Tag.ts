/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 14:51:56
 * @LastEditors: 南岸有归
 * @Description: 标签操作层
 * @FilePath: \admind:\react\Blog-Server\src\controllers\Tag.ts
 * @
 */
import { ServiceGetTagList } from "../service/Tag"

export async function ControllersGetTagList(ctx:any,next:any) {
    await ServiceGetTagList()
        .then((res)=>{
            ctx.body={
                code:0,
                mess:'获取成功',
                data:res
            }
        })
        .catch((err)=>{
            ctx.body={
                code:1,
                mess:'获取失败',
                err
            }
        })
    await next()
}
