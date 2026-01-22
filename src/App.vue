<template>
  <div id="app">
    <LangSwitch />
    <router-view />
  </div>
</template>

<script>
import LangSwitch from './components/LangSwitch.vue'

export default {
  name: 'App',
  components: {
    LangSwitch
  }
}
</script>

<style>
#app {
  font-family: Inter, system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>