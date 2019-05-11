<!--
 * @Description: 主页面
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-11 14:24:29
 * @LastEditTime: 2019-05-11 22:12:15
 -->

<template>
  <el-container style="border: 1px solid #eee;height:100%;" direction="vertical">
    <el-header>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
          <!-- <img style="width: 100px; height: 100px;margin-left: 300px"
        :src="url"
          :fit="fit"/>-->
        </el-header>
      </el-container>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message"></i>分组
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">c++交流群</el-menu-item>
              <el-menu-item index="1-2">node交流群</el-menu-item>
              <el-menu-item index="1-2">java交流群</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2-1">张三</el-menu-item>
          <el-menu-item index="2-2">李四</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <GeminiScrollbar class="my-scroll-bar">
            <ChatItem :msg='msgs'></ChatItem>
        </GeminiScrollbar>
        <div>
          <el-input type="textarea" v-model="msg.text" rows="3" @keyup.enter.native="send()">
          </el-input>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import ChatItem from './ChatItem.vue'
export default {
  data() {
    return {
      msg: {
        text: ""
      },
      msgs:[]
    };
  },
  methods: {
    go(path) {
      this.$router.push(path);
    },
    send(){
      let text = this.msg.text;
      this.msgs.push(text);
      this.msg.text = '' ;
    }
  },
  components:{ChatItem}
};
</script>