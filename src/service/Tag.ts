import Models from '../models/index'

export async function ServiceGetTagList() {
    return  new Promise((resolve: any, reject: any)=>{
        resolve(Models.Tag.findAll())
    })
}
