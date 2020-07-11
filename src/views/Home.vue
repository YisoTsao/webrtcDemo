<template>
  <div class="home">
    <WebRtcMain />
  </div>
</template>

<script>
// @ is an alias to /src
import WebRtcMain from "@/components/WebRtcMain.vue";

export default {
  name: "Home",
  components: {
    WebRtcMain
  }
};
</script>
