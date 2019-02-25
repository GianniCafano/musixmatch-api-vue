import Vue from 'vue';
import VueRouter from 'vue-router'
import App from './App.vue';

import TrackChart from './components/TrackChart.vue';
import TrackDetail from './components/TrackDetail.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'trackChart' ,
    component: TrackChart
},
  {
    path: '/track/:id',
    name: 'trackDetail', 
    component: TrackDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  routes:routes 
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


