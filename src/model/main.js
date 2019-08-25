/*
 * @Description: 主页面的data
 * @Author: leekwe
 * @Date: 2019-08-25 23:49:14
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-08-25 23:49:49
 */
module.exports = {
    userName: "Leekwe",
    msg: {
        text: ""
    },
    // 聊天界面的名字
    targetName: "群聊（50）",
    search: "",
    chatTables: [
        {
            type: "group",
            name: "java交流群"
        },
        {
            type: "group",
            name: ".net交流群"
        },
        {
            type: "user",
            name: "张三"
        }
    ],
    msgs: [],
    user: {},
    groups: [], // 群数
    friends: [],
    chatBlockShow: true,
    show: 'none'// 聊天主界面是否显示
}