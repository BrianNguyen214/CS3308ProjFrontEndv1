<template>
  <body>
    <div id="app">
      <router-view/>
    </div>
  </body>
</template>

<script>

import Home from './components/Home'

export default {
  name: 'app',
  components: {
    Home,
  }
}

</script>

<style lang="scss">
/*
#app {
  
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
} */

body {
    background-color: rgb(51, 48, 48);
}
/*
h1, h2 {
  font-weight: normal;
} */

</style>
