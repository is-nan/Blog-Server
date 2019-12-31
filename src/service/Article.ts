import Models from '../models/index'
import * as fs from 'fs'
import * as path from 'path'

//新增文章
export async function ServiceNewArticle<T>(data: any): Promise<T> {
    let Cover:any='www.nanbk.com'
    if(data.Cover){
       Cover=data.Cover
    }
    return await new Promise((resolve: any, reject: any) => {
        if (!data.title || !data.content || !data.Category||!data.status||!data.createdTime) {
            reject('参数错误，请检查！')
        } else if (data.TagName.length < 0) {
            reject('标签错误，请检查！')
        } else if(data.Category.length <1&&data.Category.length>=2){
            reject('分类必须或只能有一个！')
        }
        else {
            const {title, content, createdTime, Category, TagName,status,Author} = data
            const Tags = TagName.map(c => ({TagName: c}))
            const Categories = Category.map(c=>({CategoryName:c}))
            console.log(Cover)
            resolve(
                Models.Article.create(
                    {title, content, createdTime,Cover,status,Author, Categories, Tags},
                    {include: [Models.Category, Models.Tag]})
            )
        }
    })
}

//获取发布状态的文章
export async function ServiceGetReleaseArticleList<T>(): Promise<T> {
    return  Models.Article.findAll({
        where: {status: 1},
        include: [
            {model: Models.Tag,attributes:['TagName']},
            {model: Models.Category,attributes:['CategoryName']}
        ]
    })
}

//获取所有文章
export async function ServiceGetArticleList<T>(): Promise<T> {
    return  Models.Article.findAll({
        include: [
            {model: Models.Tag},
            {model: Models.Category}
        ]
    })
}

//修改文章状态
export async function ServiceUpdateArticleStatus(data:any) {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.id||!data.status){
            reject('参数错误,请检查')
        }
        else {
            resolve(Models.Article.update({status:data.status},{ where: { id: data.id } }))
        }
    })

}

//更新与修改
export async function ServiceUpdateArticle<T>(data: any): Promise<T> {
    return new Promise((resolve: any, reject: any) => {
        if(Object.keys(data).length===0){
            reject('未做出修改')
        }
        else {
            const {title, content, createdTime, Category, TagName,status,Author,Cover} = data
            const Tags = TagName.map(c => ({TagName: c}))
            const Categories = Category.map(c=>({CategoryName:c}))
            resolve(
                Promise.all([
                    Models.Article.update({title, content, createdTime,status,Author,Cover},{ where: { id: data.id } }),
                    Models.Tag.destroy({ where: {ArticleId:data.id}}),
                    Models.Tag.bulkCreate(Tags),
                    Models.Category.destroy({ where: {ArticleId:data.id}}),
                    Models.Category.bulkCreate(Categories)
                ]).then((res)=>{
                    resolve(res)
                }).catch((err)=>{
                    reject(err)
                })
            )
        }
    })
}

//删除文章
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

//图片保存，并且返回图片路径
export async function ServiceUploadImages<T>(data: any): Promise<T> {
    //获取文件
    const file = await data
    console.log(data)
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
