<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div v-if="albumInfo.album_coverart_100x100" class="cover-art" :style='{ backgroundImage: "url(" + albumInfo.album_coverart_100x100 + ")", }'>
                </div>
                <div v-else class="cover-art" style="background-image:url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/eb777e7a-7d3c-487e-865a-fc83920564a1/d7kpm65-437b2b46-06cd-4a86-9041-cc8c3737c6f0.jpg)">
                </div>
            </div>
            <div class="col-md-9">
                <h1>{{this.trackInfo.track_name}}</h1>
                <h4>{{this.trackInfo.artist_name}}</h4>
            </div>
            <section class="col-md-12 mt-5">
                <p class="lyrics">
                    <img :src="this.trackLyrics.pixel_tracking_url">
                    {{this.trackLyrics.lyrics_body}}
                </p>
            </section>
        </div>
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
            await ApiService.get(`https://api.musixmatch.com/ws/1.1/track.get?apikey=${this.apiKey}&commontrack_id=${this.commontrack_id}`)
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
            await ApiService.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=${this.apiKey}&commontrack_id=${this.commontrack_id}`)
            .then((response) =>{
                this.trackLyrics = response.data.message.body.lyrics;
                console.log('lyrics:', this.trackLyrics);  
            })
            .catch((err) => {
                console.log('error:', err);
            });          
        },
    
        async getAlbum(){
            await ApiService.get(`https://api.musixmatch.com/ws/1.1/album.get?apikey=${this.apiKey}&album_id=${this.album_id}`)
            .then((response) =>{
                this.albumInfo = response.data.message.body.album;
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



