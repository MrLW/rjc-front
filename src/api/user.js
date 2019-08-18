/*
 * @Description: 用户模块
 * @Author: leekwe
 * @Date: 2019-08-10 12:24:54
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-08-15 22:15:47
 */


export default class {

    /**
     * 登陆
     * @param {*} socket 当前socket对象
     * @param {*} user 用户对象
     * @param {*} callback 回调
     */
    static login(socket,user,callback) {
        socket.emit("/user/login", user, msg => {
            callback(msg);
        })
    }

    /**
     * 注册
     * @param {*} socket 当前socket对象
     * @param {*} user 用户对象
     * @param {*} callback 回调
     */
    static regist(socket,user,callback) {
        socket.emit("/user/regist", user, msg => {
            callback(msg);
        })
    }

    static test(){
        console.error('user method test',this.$socket);
    }
    /**
     * 获取当前聊天用户列表
     * @param {*} socket 当前socket对象
     */
    static chatList(socket,callback){
        callback([
            {
                id:'1',
                name:'Java交流群',
                type:'room',
            },
            {
                id:'2',
                name:'Node交流群',
                type:'room',
            },
            {
                id:'1',
                name:'张三',
                type:'user',
            },
        ])
    }
}