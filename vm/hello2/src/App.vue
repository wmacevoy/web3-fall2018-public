<template>
  <div id="app">
    {{ info }}
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'App',
    data () {
	return {
	    info:   null
	}
    },
    mounted () {
	axios
	    .get('https://api.coindesk.com/v1/bpi/currentprice.json')
	    .then(response => (this.info = response))
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
