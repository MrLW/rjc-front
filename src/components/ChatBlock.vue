<!--
 * @Description: 聊天主页面
 * @Author: leekwe
 * @Date: 2019-06-06 17:00:42
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-09-08 14:09:35
 -->
<template>
  <el-main>
    <GeminiScrollbar class="my-scroll-bar" style>
      <ChatItem :msg="msgs"></ChatItem>
    </GeminiScrollbar>
    <div class="sendMessage">
      <el-input type="textarea" v-model="msg" rows="3" @keyup.enter.native="send()"></el-input>
    </div>
  </el-main>
</template>
<script>
import ChatItem from "./ChatItem.vue";
import messageApi from "../api/message";
import { currentUserId, toUserId } from "../utils/user";
export default {
  props: ["to"],
  data() {
    return {
      msg: "", // 输入框里的值
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
      messageApi.send(this.$socket, text, currentUserId(), this.to, msgs => {
        this.msgs = msgs;
        this.clear();
      });
    },
    clear() {
      this.msg = "";
    }
  },
  created() {},
  watch: {
    to(newId, oldId) {
      messageApi.list(this.$socket, currentUserId(), newId, msgs => {
        this.msgs = msgs;
      });
    }
  },
  components: {
    ChatItem
  }
};
</script>