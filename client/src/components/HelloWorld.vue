<template>
  <div class="hello">
    <center>
      <p>แนะนำโดยคุณฟิว</p>
      <button v-on:click="navigateTo('/waters')">ดูข้อมูลผู้ใช้</button>
    </center>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    } 
  },
  methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },

  

  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
