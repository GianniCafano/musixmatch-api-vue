<template>
    <div class="container">
        <h1>{{this.trackInfo.track_name}}</h1>
        <p>
            <img :src="this.trackLyrics.pixel_tracking_url">
            {{this.trackLyrics.lyrics_body}}
        </p>
    </div>
</template>

<script>
import ApiService from '../js/services/ApiService.js';
export default {
  name: 'track-detail',
  async mounted(){
    await this.getTrack();
    await this.getLyrics();
    await this.getAlbum();
  },
  data(){
      return{
          apiKey: 'a0bee439d41ee4fcce9f8e495303f394',
          id: 0,
          track_id: 0,
          album_id: this.$route.params.album_id,
          trackInfo: {},
          trackLyrics: {},
          albumInfo: {},
          commontrack_id: this.$route.params.id
      }
  },
    methods:{
        async getTrack(){
            ApiService.get(`https://api.musixmatch.com/ws/1.1/track.get?apikey=${this.apiKey}&commontrack_id=${this.commontrack_id}`)
            .then((response) =>{
                this.trackInfo = response.data.message.body.track;
                this.album_id = response.data.message.body.track.album_id;
                console.log('track info', this.trackInfo);
                console.log('album id', this.trackInfo.album_id);
            })
            .catch((err) => {
                console.log('error:', err);
            });            
        },
        
        async getLyrics(){
            ApiService.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${this.apiKey}&commontrack_id=${this.commontrack_id}`)
            .then((response) =>{
                this.trackLyrics = response.data.message.body.lyrics;
                console.log('lyrics:', this.trackLyrics);  
            })
            .catch((err) => {
                console.log('error:', err);
            });          
        },
    
        async getAlbum(){
            ApiService.get(`https://api.musixmatch.com/ws/1.1/album.get?apikey=${this.apiKey}&album_id=${this.album_id}`)
            .then((response) =>{
                this.albumInfo = response.data;
                console.log('album info', this.albumInfo);
                console.log(`https://api.musixmatch.com/ws/1.1/album.get?apikey=${this.apiKey}&album_id=${this.album_id}`);
            })
            .catch((err) => {
                console.log('error:', err);
            });          
        }
    }
}
</script>



