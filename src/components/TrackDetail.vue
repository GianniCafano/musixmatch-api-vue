<template>
    <div class="container">
        <h1>{{trackInfo.track_name}}</h1>
        <p>
            <img :src="trackLyrics.pixel_tracking_url">
            {{trackLyrics.lyrics_body}}
        </p>
    </div>
</template>

<script>
import ApiService from '../js/services/ApiService.js';
export default {
  name: 'track-detail',
  data(){
      return{
          apiKey: 'a0bee439d41ee4fcce9f8e495303f394',
          id: 0,
          track_id: 0,
          album_id: 0,
          trackInfo: {},
          trackLyrics: {},
          albumInfo: {}
      }
  },
  updated(){
      console.log(this.album_id);
  },
  mounted() {
        ApiService.get(`https://api.musixmatch.com/ws/1.1/track.get?apikey=${this.apiKey}&commontrack_id=${this.id}`)
            .then((response) => {
                this.trackInfo = response.data.message.body.track;
                this.album_id = response.data.message.body.track.album_id;
            }).catch((error)=>{
                console.log(error);
        });
        ApiService.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${this.apiKey}&commontrack_id=${this.id}`)
            .then((response) => {
                this.trackLyrics = response.data.message.body.lyrics;
            }).catch((error)=>{
                console.log(error);
        });

        ApiService.get(`https://api.musixmatch.com/ws/1.1/album.get?apikey=${this.apiKey}&album_id=${this.album_id}`)
            .then((response) => {
                this.albumInfo = response.data;
                console.log('album info:', this.albumInfo);
                console.log(`https://api.musixmatch.com/ws/1.1/album.get?apikey=${this.apiKey}&album_id=${this.album_id}`);
            }).catch((error)=>{
                console.log(error);
        });
    },

}
</script>
