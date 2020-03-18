interface Mysql{
    database:string,
    username:string,
    password:string,
    host:string,
    port:number
}
interface Token {
    secret:string,//密钥
    expiresIn:string//token有效时间
}
export const ConfigJwt:Token={
    secret:'nayg',
    expiresIn:'48h'
}
export const Config:Mysql={
    database:'Blog',
    username:'root',
    password:'root',
    host:'localhost',
    port:3306
}
