<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <CheckServer></CheckServer>
  </div>
</template>

<script>
import CheckServer from '@/components/CheckServer.vue'
export default {
  components: { CheckServer },
  name: "HelloWorld",
  data() {
    return {
      msg: "this is main page"
    };
  },
  sockets: {
    connect:function () {
    }
  }
};
</script>