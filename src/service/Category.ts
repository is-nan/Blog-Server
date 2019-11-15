import Models from '../models/index'

export async function ServiceGetCategoryList() {
    return new Promise((resolve: any, reject: any)=>{
        resolve(Models.Category.findAll())
    })
}
