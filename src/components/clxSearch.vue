<template>
  <div class="hello">
    <h1>{{ msg }}---{{this.$route.params.id}}</h1>
  </div>
</template>

<script>
export default {
  name: 'clxSearch',
  data () {
    return {
      msg: '这是clxSearch组件'
    }
  },
  created() {
    this.getInfo()
  },
  methods: {
    getInfo(){
      this.axios.get('/list.php', {
          params: {
            key:'937e9807052d70080f0441e67f100a98',
            sort:'asc',
            time:'1418816972'
          }
        })
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });

        this.axios.post('/list.php', {
            key:'937e9807052d70080f0441e67f100a98',
            sort:'asc',
            time:'1418816972'
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
