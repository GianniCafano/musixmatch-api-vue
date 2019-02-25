<template>
  <div id="app">
   <router-view>
     <track-chart></track-chart>
   </router-view>
  </div>
</template>

<script>
import TrackChart from './components/TrackChart.vue'

export default {
  name: 'app',
  components: {
    TrackChart
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
