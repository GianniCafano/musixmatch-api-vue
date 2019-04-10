import TrackChart from '../components/TrackChart.vue';
import TrackDetail from '../components/TrackDetail.vue';

const routes = [
    {
      path: '/',
      name: 'trackChart' ,
      component: TrackChart,
      props: true
  },
    {
      path: '/track/:id',
      name: 'trackDetail', 
      component: TrackDetail,
      props: true
    }
  ]

  export default routes;