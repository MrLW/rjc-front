/*
 * @Description: 主页面的data
 * @Author: leekwe
 * @Date: 2019-08-25 23:49:14
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-09-08 22:35:04
 */
module.exports = {
  username: 'Leekwe',
  msg: {
    text: ''
  },
  // 聊天界面的名字
  targetName: '群聊（50）',
  search: '',
  msgs: [],
  user: {},
  groups: [], // 群数
  friends: [],
  chatBlockShow: true,
  show: 'none', // 聊天主界面是否显示
  to: '' // 当前正在聊天的id
};
