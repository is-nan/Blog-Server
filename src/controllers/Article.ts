/*
 * @Author: 南岸有归
 * @Date: 2020-03-18 09:50:08
 * @LastEditTime: 2020-03-19 21:25:46
 * @LastEditors: 南岸有归
 * @Description: 文章操作层
 * @FilePath: \Blog-Server\src\controllers\Article.ts
 * @
 */
import ServiceArticle from '../service/Article'
/**
 * @description: 文章操作层类
 * @param {type} 
 * @return: 
 */

class ControllersArticle {
    /**
     * @description: 文字操作层新增文章返回
     * @param {type} 
     * @return: 
     */
    static async ControllersNewArticle(ctx: any, next: Function) {
        await ServiceArticle.ServiceNewArticle(ctx.request.body)
            .then((Promise) => {
                console.log(Promise)
                return Promise
            })
            .then((res: any) => {
                ctx.body = {
                    mess: '新增成功',
                    code: 0
                }
            })
            .catch((err: string | Error) => {
                ctx.body = {
                    err,
                    code: 1,
                    mess: '新增失败'
                }
            })
        await next()
    }
    /**
     * @description: 文章操作层获取已经发布的文章返回
     * @param {type} 
     * @return: 
     */
    static async ControllersGetReleaseArticle(ctx: any, next: Function) {
        await ServiceArticle.ServiceGetReleaseArticleList()
            .then((res: any) => {
                ctx.body = {
                    data: res,
                    mess: '获取成功',
                    code: 0
                }
            })
            .catch((err: string | Error) => {
                ctx.body = {
                    err,
                    mess: '获取失败',
                    code: 1
                }
            })
        await next()
    }
    /**
     * @description: 文章操作层修改文章状态返回
     * @param {type} 
     * @return: 
     */
    static async  ControllersUpdateArticleStatus(ctx: any, next: Function) {
        await ServiceArticle.ServiceUpdateArticleStatus(ctx.request.body)
            .then((Promise: any) => {
                return Promise
            })
            .then((res: any) => {
                ctx.body = {
                    mess: '修改成功',
                    code: 0
                }
            })
            .catch((err: string | Error) => {
                ctx.body = {
                    mess: '修改失败',
                    err,
                    code: 1
                }
            })
        await next()
    }
    /**
     * @description: 文章操作层获取已发布AND未发布的文章返回
     * @param {type} 
     * @return: 
     */
    static async ControllersGetArticle(ctx: any, next: Function) {
        await ServiceArticle.ServiceGetArticleList()
            .then((res: any) => {
                ctx.body = {
                    data: res,
                    mess: '获取成功',
                    code: 0
                }
            })
            .catch((err: string | Error) => {
                ctx.body = {
                    err,
                    mess: '获取失败',
                    code: 1
                }
            })
        await next()
    }
    /**
     * @description: 文章操作层更新文章返回
     * @param {type} 
     * @return: 
     */
    static async ControllersUpdateArticle(ctx: any, next: Function) {
        await ServiceArticle.ServiceUpdateArticle(ctx.request.body)
            .then((Promise: any) => {
                return Promise
            })
            .then((res: any) => {
                ctx.body = {
                    mess: '修改成功',
                    code: 0
                }
            })
            .catch((err: string | Error) => {
                ctx.body = {
                    mess: '修改失败',
                    err,
                    code: 1
                }
            })
        await next()
    }
    /**
     * @description: 文章操作层删除文章返回
     * @param {type} 
     * @return: 
     */
    static async ControllersDeleteArticle(ctx: any, next: Function) {
        await ServiceArticle.ServiceDeleteArticle(ctx.request.body)
            .then((Promise: any) => {
                return Promise
            })
            .then((res: any) => {
                ctx.body = {
                    mess: '删除成功',
                    code: 0
                }
            })
            .catch((err: string | Error) => {
                ctx.body = {
                    mess: '删除失败',
                    err,
                    code: 1
                }
            })
        await next()
    }
    /**
     * @description: 文章操作层上传图片返回
     * @param {type} 
     * @return: 
     */
    static async  ControllersUploadImages(ctx: any, next: any) {
        await ServiceArticle.ServiceUploadImages(ctx.request.files.file)
            .then((res: any) => {
                ctx.body = {
                    data: res,
                    mess: '上传成功',
                    code: 0
                }
            })
            .catch((err: string | Error) => {
                ctx.body = {
                    err,
                    mess: '上传失败',
                    code: 1
                }
            })
        await next()
    }
}

export async function ControllersUploadImages(ctx: any, next: any) {
    await ServiceArticle.ServiceUploadImages(ctx.request.files.file)
        .then((res: any) => {
            ctx.body = {
                data: res,
                mess: '上传成功',
                code: 0
            }
        })
        .catch((err: string | Error) => {
            ctx.body = {
                err,
                mess: '上传失败',
                code: 1
            }
        })
    await next()
}

export default ControllersArticle