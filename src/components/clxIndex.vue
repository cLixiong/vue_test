<template>
  <div class="hello">
    <mt-swipe :auto="4000" class="mtSwiper">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'clxIndex',
  data () {
    return {
      msg: '这是clxIndex组件'
    }
  },
  methods: {
    handleChange(index) {
     
    }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mtSwiper{
  height: 100px !important;
  background-color: pink;
}
</style>
