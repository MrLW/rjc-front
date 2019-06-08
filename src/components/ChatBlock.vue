<!--
 * @Description: 聊天主页面
 * @Author: leekwe
 * @Date: 2019-06-06 17:00:42
 * @version: 1.0
 * @LastEditors: leekwe
 * @LastEditTime: 2019-06-06 17:00:51
 -->
<!--
 * @Description: 主页面
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-11 14:24:29
 * @LastEditTime: 2019-06-06 17:10:15
 -->
<template>
  <el-main>
    <GeminiScrollbar class="my-scroll-bar">
      <ChatItem :msg="msgs"></ChatItem>
    </GeminiScrollbar>
    <div>
      <el-input type="textarea" v-model="msg.text" rows="3" @keyup.enter.native="send()"></el-input>
    </div>
  </el-main>
</template>
<script>
import ChatItem from "./ChatItem.vue";
export default {
  data() {
    return {
      msg: {
          
      },
      msgs: [],
      user: {}
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