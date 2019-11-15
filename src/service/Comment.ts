import Models from '../models/index'

export async function ServiceNewComment(data:any) {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.content||!data.username){
            reject('内容或昵称有误')
        }
        else {
            resolve(Models.Comment.create({...data}))
        }
    })
}

export async function ServiceGetArticleComment(data:any) {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.ArticleId){
            reject('参数错误')
        }
        else {
            resolve(
                Models.Comment.findAll({where:{ArticleId:data.ArticleId}})
            )
        }
    })
}

export async function ServiceGetComment() {
    return new Promise((resolve: any, reject: any)=>{
        resolve(Models.Comment.findAll({where:{ArticleId:null}}))
    })
}

export async function ServiceDeleteComment(data:any) {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.id){
            reject('参数错误')
        }
        else {
            resolve(Models.Comment.destroy({where:{id:data.id}}))
        }
    })
}
