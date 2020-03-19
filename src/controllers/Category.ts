/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 21:27:28
 * @LastEditors: 南岸有归
 * @Description: 分类操作层
 * @FilePath: \Blog-Server\src\controllers\Category.ts
 * @
 */
import ServiceCategory from "../service/Category";
/**
 * @description: 文章分类列表操作层类
 * @param {type} 
 * @return: 
 */

class ControllersCategory{
    /**
     * @description: 获取文章分类列表返回
     * @param {type} 
     * @return: 
     */
    static async ControllersGetCategoryList(ctx:any,next:Function) {
        await ServiceCategory.ServiceGetCategoryList()
            .then((res:any)=>{
                ctx.body={
                    data:res,
                    mess:'获取成功',
                    code:0
                }
            })
            .catch((err:string|Error)=>{
                ctx.body={
                    mess:'获取失败',
                    code:1
                }
            })
    }
}

export default ControllersCategory
