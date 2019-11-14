import Models from '../models/index'
import * as fs from 'fs'
import * as path from 'path'
export async function ServiceNewArticle<T>(data:any):Promise<T> {
    return await new Promise((resolve:any,reject:any)=>{
        if(!data.title||!data.content||!data.createdAt||!data.CategoryName){
            reject('参数错误，请检查！')
        }else if(Object.keys(data.TagName.length<1)){
            reject('标签错误，请检查！')
        }
        else {
            const {title,content,createdAt,CategoryName,TagName}=data
            const Tags=TagName.map(c=>({TagName:c}))
            const Categories={CategoryName}
            resolve(
                Models.Article.create(
                    { title,content,createdAt,Categories,Tags},
                    { include: [Models.Category,Models.Tag]})
            )
        }
    })
}

export async function ServiceGetReleaseArticleList<T>():Promise<T> {
    return await Models.Article.findAll({
        where:{status:1},
        include:[
            {model:Models.Tag},
            {model:Models.Category}
        ]
    })
}
export async function ServiceGetArticleList<T>():Promise<T> {
    return await Models.Article.findAll({
        include:[
            {model:Models.Tag},
            {model:Models.Category}
        ]
    })
}
export async function ServiceUpdateArticle<T>(data:any):Promise<T> {
    return new Promise((resolve:any,reject:any)=>{

    })
}
export async function ServiceDeleteArticle<T>(data):Promise<T> {
    return new Promise((resolve:any,reject:any)=>{
        if(!data.id){
            reject('参数错误')
        }
        else {
            const ArticleId:number=data.id
            Promise.all([
                Models.Article.destroy({where:{id:ArticleId}}),
                Models.Category.destroy({where:{ArticleId}}),
                Models.Tag.destroy({where:{ArticleId}})
            ]).then((res)=>{
                resolve(res)
            }).catch((err)=>{
                reject(err)
            })
        }
    })
}

export async function ServiceUploadImages<T>(ctx:any):Promise<T> {
    //获取文件
    const file=await ctx.request.files.file
    // 创建可读流
    const reader =await  fs.createReadStream(file.path)
    let filePath=await  path.join(__dirname, '../images/') +file.name;
    console.log(filePath)
    // 创建可写流
    const upStream =await fs.createWriteStream(filePath)
    // // 可读流通过管道写入可写流
    await reader.pipe(upStream);
    return new Promise((resolve:any,reject:any)=>{
        resolve(filePath)
    })
}
