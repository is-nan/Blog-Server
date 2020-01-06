import Models from '../models/index'

export  async function ServiceNewLink<T>(data: any): Promise<T> {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.name||!data.url){
            reject('参数错误')
        }
        else {
            resolve(
                Models.Link.create({...data})
            )
        }
    })
}

export async function ServiceGetLinkList() {
    return new Promise((resolve: any, reject: any)=>{
        resolve(Models.Link.findAll())
    })
}

export async function ServiceDeleteLink<T>(data: any): Promise<T> {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.id){
            reject('Id有误')
        }
        else {
            resolve(Models.Link.destroy({where: {id:data.id}}))
        }
    })
}

//修改友情链接
export async function ServiceUpdateLink<T>(data:any): Promise<T> {
    return new Promise((resolve: any, reject: any)=>{
        if(!data.id){
            reject('Id有误')
        }else if(!data.name||!data.url){
            reject('博客名或博客链接有误')
        }
        else {
            resolve(Models.Link.update({name:data.name,url:data.url,email:data.email},{where: {id:data.id}}))
            resolve(Models.Article.update({status:data.status},{ where: { id: data.id } }))
        }
    })
}
