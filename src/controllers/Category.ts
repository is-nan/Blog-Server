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
