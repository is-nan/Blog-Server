/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 14:51:06
 * @LastEditors: 南岸有归
 * @Description: 分类操作层
 * @FilePath: \admind:\react\Blog-Server\src\controllers\Category.ts
 * @
 */
import { ServiceGetCategoryList } from "../service/Category";

export async function ControllersGetCategoryList(ctx:any,next:any) {
    await ServiceGetCategoryList()
        .then((res)=>{
            ctx.body={
                data:res,
                mess:'获取成功',
                code:0
            }
        })
        .catch((err)=>{
            ctx.body={
                mess:'获取失败',
                code:1
            }
        })
}
