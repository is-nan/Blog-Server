interface Mysql{
    database:string,
    username:string,
    password:string,
    host:string,
    port:number
}
interface Token {
    name:string,
    _id:string,

}
const config:Mysql={
    database:'Blog',
    username:'root',
    password:'QWXP1208316514',
    host:'localhost',
    port:3306
}
export default config
