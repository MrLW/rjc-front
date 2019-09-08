/*
 * @Description: 消息
 * @Author: leekwe
 * @Date: 2019-08-15 22:56:31
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-09-08 00:25:22
 */
import { msgs, historyMsgs } from './constant';
export default class {
  /**
   * 发送消息的回调
   * @param {*} socket 当前socket对象
   * @param {*} msg 消息内容
   * @param {*} from
   * @param {*} to
   * @param {*} callback 回调
   */
  static send(socket, msg, from, to, callback) {
    socket.emit('/message/send', msg, from, to, result => {
      console.info('------------', result);
      callback(result);
    });
  }

  /**
   * 获取当前用户与目标聊天用户的聊天记录
   * @param {*} socket 当前socket对象
   * @param {*} from 源ID
   * @param {*} to 目标用户ID
   * @param {*} classback 回调
   */
  static list(socket, from, to, callback) {
    socket.emit('/message/list', from, to, result => {
      callback(result);
    });
  }
}
