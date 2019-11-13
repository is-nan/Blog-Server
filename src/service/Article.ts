import Models from '../models/index'

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
export async function ServiceUpdateArticle<T>(data):Promise<T> {
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
