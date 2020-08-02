<template>
  <div id="app">
    <WebRtcMain />
    <router-view />
  </div>
</template>

<script>
import WebRtcMain from "@/components/WebRtcMain.vue";

export default {
  name: "webRtcMain",
  components: {
    WebRtcMain
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.video-list[data-v-49ef9b35]{
  background: #232323!important;
  display: flex;
  flex-wrap: wrap;
}
.video-list div[data-v-49ef9b35]{
  padding:0
}

.video-list > div:nth-child(1){
  width: 100vw;
}

.chatBtn{
  margin: 0 0 0 6rem;
  margin-bottom: 80px;
}

.video-list > div:nth-child(1) > video{
  margin: 0 auto;
  width: 100%;
}

@media screen and (max-width:991px){
  .video-list > div:nth-child(1) > video{
     height: auto;
  }
}
@media screen and (min-width:992px){
   .video-list > div:nth-child(1) > video{
     height: 50vh;
  }
  .video-list > div:nth-child(2) > video{
     margin: 0 0 0 5rem;
  }
}

.video-item[data-v-49ef9b35]{
  background:#232323!important;
  margin: 4px;
}

</style>
