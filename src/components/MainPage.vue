<!--
 * @Description: 主页面
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-11 14:24:29
 * @LastEditTime: 2019-06-08 17:37:58
 -->

<template>
  <el-container style="border: 1px solid #eee;height:100%;" direction="vertical">
    <el-header>
      <el-container>
        <el-header style="text-align: center; font-size: 12px">
          <div style="">群聊啦!(50)</div>
          <span>{{user.userName}}</span>
        </el-header>
      </el-container>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu @select="handleSelect(this)">
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>群聊
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1" v-for="item in groups" >{{item.name}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- <el-menu-item index="2-1">张三</el-menu-item> -->
          <!-- <el-menu-item index="2-2">李四</el-menu-item> -->
        </el-menu>
      </el-aside>
      <ChatBlock v-bind:style="{ display: chatBlockShow }">
      </ChatBlock>
    </el-container>
  </el-container>
</template>
<script>
import ChatItem from "./ChatItem.vue";
import ChatBlock from './ChatBlock.vue';
export default {
  data() {
    return {
      msg: {
        text: ""
      },
      msgs: [],
      user: {},
      groups:[],// 群数
      chatBlockShow:"block"
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    send() {
      let text = this.msg.text.replace(/[\r\n]/g,"");
      this.$socket.emit("/message/send",{
        msg:text
      },data=>{
          this.msgs.push(text);
          this.msg.text = "";
      })
    },
    handleSelect(data){
      // this.chatBlockShow = this.chatBlockShow === "none" ? "block" : "none";
    }
  },
  created() {
    this.$socket.emit("/room/list",localStorage.getItem("user"),result=>{
      this.groups = result ;
    })
  },
  components: { ChatItem,ChatBlock }
};
</script>