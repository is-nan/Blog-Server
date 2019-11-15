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
