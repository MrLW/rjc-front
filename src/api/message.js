/*
 * @Description: 消息
 * @Author: leekwe
 * @Date: 2019-08-15 22:56:31
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-08-18 12:01:47
 */
import { msgs,historyMsgs } from './constant';
export default class {
    /**
     * 发送消息的回调
     * @param {*} socket 当前socket对象
     * @param {*} msg 消息内容
     * @param {*} from 
     * @param {*} to
     * @param {*} callback 回调
     */
    static send(socket, msg,from,to,callback) {
        console.info('send=>>>>>>>>>>>',from,to);
        msgs.push({
            id: '1',
            msg: msg,
            from,
            to,
            createAt: new Date(),
        });
        // 添加历史记录
        historyMsgs.push({
            id:'1',
            msg:'这是聊天内容',
            createAt:new Date(), 
            toId:to,
            fromName:'',
            toName:'',
        });
        callback(msgs);
    }
    
    /**
     * 获取当前用户与目标聊天用户的聊天记录
     * @param {*} socket 当前socket对象
     * @param {*} fromId 源ID
     * @param {*} toId 目标用户ID
     * @param {*} classback 回调
     */
    static getMessagesByUserId(socket,fromId,toId,callback){
        callback(historyMsgs);
    }
}