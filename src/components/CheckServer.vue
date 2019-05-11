<template>
  <div class="checkServer">
    <img v-bind:src="imageUrl"/>
  </div>
</template>

<script>
export default {
  name: 'CheckServer',
  computed: {
    available:function () {
      return this.$store.state.available ;
    },
    imageUrl:function () {
      return this.$store.state.imageUrl ;
    }
  },
  created() {
    this.$store.dispatch('checkServer');
  },
}
</script>