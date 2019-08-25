<!--
 * @Description: 主页面
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-11 14:24:29
 * @LastEditTime: 2019-08-25 23:58:55
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
              <li v-for="item in friends" style="list-style：none；" @click="handleSelect(item)">
                <el-menu-item index="2">
                  <span slot="title" style="color:white">{{item.username}}</span>
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
import {currentUserId, currentUserName, toUserId} from '../utils/user.js';
import { historyMsgs } from '../api/constant';
import main from '../model/main';
export default {
  data() {
    return main;
  },
  methods: {
    go(path) {
      this.$router.push(path);
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
    // 初始化左侧聊天栏
    userApi.chatList(this.$socket, result => {
      if(result.success){
        this.friends = result.data;
      }else {
          alert(result.success);
      }
    });
    this.userName = currentUserName();
  },
  components: { ChatItem, ChatBlock }
};
</script>