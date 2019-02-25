<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Top Charts</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Track Name</th>
                            <th>Artist Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="track in tracks" v-bind:key="track.track_id">
                            <th>
                                <router-link :to="{name: 'trackDetail', params: {id: track.track.commontrack_id, track_id: track.track.track_id, album_id: track.track.album_id}}">
                                    {{track.track.track_name}}
                                </router-link>
                            </th>
                            <th>{{track.track.artist_name}}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import ApiService from '../js/services/ApiService.js';
export default {
  name: 'track-chart',
  mounted(){
        ApiService.get(`https://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=${this.apiKey}&format=json&country=wx`)
            .then((data) => {
                console.log(data.data.message.body.track_list);
                this.tracks = data.data.message.body.track_list;
            })
  },
  data(){
      return{
        apiKey: 'a0bee439d41ee4fcce9f8e495303f394',
        tracks: []
      }
  }
}
</script>
