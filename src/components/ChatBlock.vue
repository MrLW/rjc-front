<!--
 * @Description: 聊天主页面
 * @Author: leekwe
 * @Date: 2019-06-06 17:00:42
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-08-25 23:59:46
 -->
<template>
  <el-main>
    <GeminiScrollbar class="my-scroll-bar" style="">
      <ChatItem :msg="msgs"></ChatItem>
    </GeminiScrollbar>
    <div class="sendMessage">
      <el-input type="textarea" v-model="msg" rows="3" @keyup.enter.native="send()"></el-input>
    </div>
  </el-main>
</template>
<script>
import ChatItem from "./ChatItem.vue";
import messageApi from '../api/message';
import { currentUserId, toUserId } from '../utils/user';
export default {
  data() {
    return {
      msg: '', // 输入框里的值
      msgs: [], // total 聊天记录
      user: {}
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    send() {
      let text = this.msg.replace(/[\r\n]/g, "");
      messageApi.send(this.$socket,text,currentUserId(),toUserId(),msgs=>{
        console.info('=======>',msgs);
        this.msgs = msgs.map(item=>{return item.msg});
        this.clear();
      })
    },
    clear(){
      this.msg = '';
    }
  },
  created() {
    console.log("当前房间:",this.$socket)
  },
  created() {
  },
  components:{
      ChatItem
  }
};
</script>