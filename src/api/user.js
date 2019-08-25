import { currentUser } from '../utils/user';

/*
 * @Description: 用户模块
 * @Author: leekwe
 * @Date: 2019-08-10 12:24:54
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-08-25 23:46:55
 */
const {currentUserId} = require('../utils/user')

export default class {

    /**
     * 登陆
     * @param {*} socket 当前socket对象
     * @param {*} user 用户对象
     * @param {*} callback 回调
     */
    static login(socket,user,callback) {
        console.info('user method execute',socket);
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

    /**
     * 获取当前聊天用户列表
     * @param {*} socket 当前socket对象
     */
    static chatList(socket,callback){
        socket.emit('/user/friends',currentUserId(),result=>{
            callback(result);
        });
    }
}