<!--
 * @Description: 聊天item
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-10 20:40:57
 * @LastEditTime: 2019-09-08 14:18:19
 -->
<template>
  <ul class="triangle">
    <li v-for="m in msg" v-bind:class="currentClass(m)">
      <span>{{m.msg}}</span>
    </li>
  </ul>
</template>
<script>
import { currentUserId, toUserId } from "../utils/user";
export default {
  props: {
    msg: Array
  },
  data() {
    return {
      isRight: true,
      isLeft: false
    };
  },
  methods: {
    currentClass(m) {
      const id = currentUserId();
      return {
        textRight: currentUserId() === m.from,
        textLeft: !(currentUserId() === m.from)
      };
    }
  }
};
</script>