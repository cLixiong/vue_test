<template>
  <div class="hello">
    <h1>{{ msg }}---{{this.$route.query.id}}--{{this.$route.query.name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'clxHuiyuan',
  data () {
    return {
      msg: '这是clxHuiyuan组件'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
