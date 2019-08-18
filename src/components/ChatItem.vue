<!--
 * @Description: 聊天item
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-10 20:40:57
 * @LastEditTime: 2019-08-15 23:36:24
 -->
<template>
  <ul class="triangle">
    <li class="textRight" v-for="m in msg">
      <span>{{m}}</span>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    msg: Array
  }
};
</script>