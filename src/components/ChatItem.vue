<!--
 * @Description: 聊天item
 * @Author: leekwe
 * @version: 1.0
 * @LastEditors: leekwe
 * @Date: 2019-05-10 20:40:57
 * @LastEditTime: 2019-05-11 14:54:30
 -->
<template>
<ul>
    <li class="chatItem" v-for="m in msg">
        {{m}}
    </li>
</ul>
</template>
<script>
export default {
    props:{
        msg:Array
    }
}
</script>