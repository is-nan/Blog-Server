interface Mysql{
    database:string,
    username:string,
    password:string,
    host:string,
    port:number
}
const config:Mysql={
    database:'Blog',
    username:'root',
    password:'root',
    host:'localhost',
    port:3306
}
export default config
