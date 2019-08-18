<!--
 * @Description: 主页面
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-11 14:24:29
 * @LastEditTime: 2019-08-18 17:02:09
 -->
<template>
  <el-container >
    <el-aside width="200px" style="background:#2F3237" direction="vertical">
      <div>
        <el-menu background-color="#2F3237">
          <el-menu-item index="1" style="background:#2F3237">
            <div style="color:white">{{userName}}</div>
          </el-menu-item>
        </el-menu>
      </div>

      <div>
        <el-menu background-color="#2F3237">
          <el-menu-item index="2" style="background:#2F3237">
            <el-input v-model="search" height="70px" type="text" placeholder="请输入要搜索的内容"/>
          </el-menu-item>
        </el-menu>
      </div>
      <div>
        <el-menu  background-color="#2F3237">
          <ul>
              <li v-for="item in chatData" style="list-style：none；" @click="handleSelect(item)">
                <el-menu-item index="2">
                  <span slot="title" style="color:white">{{item.name}}</span>
                </el-menu-item>
              </li>
          </ul>
        </el-menu>
      </div>
    </el-aside>
    <el-container :style="{'display':show}">
      <el-header>
        <el-container>
          <el-header style="text-align: center; font-size: 12px">
            <div>{{targetName}}</div>
            <span>{{user.userName}}</span>
          </el-header>
        </el-container>
      </el-header>
      <ChatBlock v-bind:style="{ display: chatBlockShow }"></ChatBlock>
    </el-container>
  </el-container>
</template>


<script>
import ChatItem from "./ChatItem.vue";
import ChatBlock from "./ChatBlock.vue";
import userApi from "../api/user";
import messageApi from '../api/message';
import {currentUserId} from '../utils/user.js';
import { historyMsgs } from '../api/constant';
export default {
  data() {
    return {
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
      chatData: [],
      show:'none'// 聊天主界面是否显示
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    send() {
      let text = this.msg.text.replace(/[\r\n]/g, "");
      const to = '';
      messageApi.send(this.$socket,currentUserId(),to,text,msgs=>{
        console.info('msgs=====>',msgs);
      })
    },
    
    /**
     *  选择一个聊天
     * @param {*} toUser 用户对象
     */
    handleSelect(toUser) {
      this.targetName = toUser.name;
      this.show = 'block';
      // 将当前用户对象存入local
      localStorage.setItem('to',JSON.stringify(toUser));
      //TODO:获取此前的聊天记录
      // messageApi.getMessagesByUserId(this.$socket,currentUserId(),toUser.id)
    }
  },
  created() {
    console.info('historyMsgs======>',historyMsgs);
    // 初始化左侧聊天栏
    userApi.chatList(this.$socket, chatData => {
      this.chatData = chatData;
    });
  },
  components: { ChatItem, ChatBlock }
};
</script>