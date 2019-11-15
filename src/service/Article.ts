import Models from '../models/index'
import * as fs from 'fs'
import * as path from 'path'

export async function ServiceNewArticle<T>(data: any): Promise<T> {
    let Cover:any='www.nanbk.com'
    if(data.Cover){
       await ServiceUploadImages(data.Cover)
            .then((res)=>{
                Cover=res
            })
    }
    return await new Promise((resolve: any, reject: any) => {
        if (!data.title || !data.content || !data.createdAt || !data.CategoryName||!data.status) {
            reject('参数错误，请检查！')
        } else if (Object.keys(data.TagName.length < 1)) {
            reject('标签错误，请检查！')
        } else {
            const {title, content, createdAt, CategoryName, TagName,status} = data
            const Tags = TagName.map(c => ({TagName: c}))
            const Categories = {CategoryName}
            resolve(
                Models.Article.create(
                    {title, content, createdAt,Cover,status, Categories, Tags},
                    {include: [Models.Category, Models.Tag]})
            )
        }
    })
}

export async function ServiceGetReleaseArticleList<T>(): Promise<T> {
    return  Models.Article.findAll({
        where: {status: 1},
        include: [
            {model: Models.Tag},
            {model: Models.Category}
        ]
    })
}

export async function ServiceGetArticleList<T>(): Promise<T> {
    return  Models.Article.findAll({
        include: [
            {model: Models.Tag},
            {model: Models.Category}
        ]
    })
}

export async function ServiceUpdateArticle<T>(data: any): Promise<T> {
    let Cover:any;
    if(typeof data.Cover!=="string"){
        await ServiceUploadImages(data.Cover)
            .then((res)=>{
                Cover=res
            })
    }
    return new Promise((resolve: any, reject: any) => {
        if(Object.keys(data).length===0){
            reject('未做出修改')
        }
        else {
            // const { title, content, createdAt, CategoryName, TagName }=data
            // const tagList = TagName.map(tag => ({ name: tag, articleId }))
            // const categoryList = categories.map(cate => ({ name: cate, articleId }))
            // Models.Article.update({title, content, createdAt,Cover:Cover?Cover:data.Cover},{ where: { id: data.id } })
            // Models.Category.destroy({where: {ArticleId:data.id}}),
            //
            // Models.Tag.destroy({where: {ArticleId:data.id}})
            // resolve()
        }
    })
}

export async function ServiceDeleteArticle<T>(data): Promise<T> {
    return new Promise((resolve: any, reject: any) => {
        if (!data.id) {
            reject('参数错误')
        } else {
            const ArticleId: number = data.id
            Promise.all([
                Models.Article.destroy({where: {id: ArticleId}}),
                Models.Category.destroy({where: {ArticleId}}),
                Models.Tag.destroy({where: {ArticleId}})
            ]).then((res) => {
                resolve(res)
            }).catch((err) => {
                reject(err)
            })
        }
    })
}

export async function ServiceUploadImages<T>(data: any): Promise<T> {
    //获取文件
    const file = await data
    // 创建可读流
    const reader = await fs.createReadStream(file.path)
    let filePath = await path.join(__dirname, '../images/') + file.name;
    console.log(filePath)
    // 创建可写流
    const upStream = await fs.createWriteStream(filePath)
    // // 可读流通过管道写入可写流
    await reader.pipe(upStream);
    return new Promise((resolve: any, reject: any) => {
        resolve(filePath)
    })
}
