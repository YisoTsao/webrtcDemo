<template>
  <div class="hello">

    <label>聊天室名稱</label> 
    <div class="roomField">
      <input v-model="roomId" class="addText" placeholder="請輸入聊天室名稱" />
    </div>
    
    <div>
 <vue-webrtc ref="webrtc"
        width="100%"
        :roomId="roomId"
        :cameraHeight="500"
        v-on:joined-room="logEvent"
        v-on:left-room="logEvent"
        v-on:opened-room="logEvent"
        v-on:share-started="logEvent"
        v-on:share-stopped="logEvent"
        @error="onError" 
      />
    </div>
     

      <div class="row">
        <div class="col-md-12 my-3">
          <button class="addBtn" @click="onJoin">Join</button>
          <button class="leaveBtn" @click="onLeave">Leave</button>
          <button class="captureBtn" @click="onCapture">Capture Photo</button>
          <button class="shareBtn" @click="onShareScreen">Share Screen</button>
        </div>
      </div>
  
  </div>
</template>

<script>
  export default {
      name: 'app',
      components: {

      },
      data() {
          return {
              img: null,
              roomId: "yiso"
          };
      },
      computed: {},
      watch: {},
      methods: {
          onCapture() {
              this.img = this.$refs.webrtc.capture();
          },
          onJoin() {
              this.$refs.webrtc.join();
          },
          onLeave() {
              this.$refs.webrtc.leave();
          },
          onShareScreen() {
              this.img = this.$refs.webrtc.shareScreen();
          },
          onError(error, stream) {
              console.log('On Error Event', error, stream);
          },
          logEvent(event) {
              console.log('Event : ', event);
          },
      }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

video{
  height: 500px;
}

.video-item{
  margin: 24px!important;
}
.roomField{
  margin: 12px;
}
.addBtn:hover {
    background-color: #30a948;
}

.addBtn {
    background-color: #308948;
    color: #fff;
    border: none;
    vertical-align: baseline;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    margin: 6px;
    font-size: 16px;
}

.leaveBtn:hover {
    background-color: #ca645d;
}

.leaveBtn {
    background-color: #ca245d;
    color: #fff;
    border: none;
    vertical-align: baseline;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    margin: 6px;
    font-size: 16px;
}
.captureBtn:hover {
    background-color: #eb8bbb;
}

.captureBtn {
    background-color: #eb4bbb;
    color: #fff;
    border: none;
    vertical-align: baseline;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    margin: 6px;
    font-size: 16px;
}


.shareBtn:hover {
    background-color: #313e88;
}

.shareBtn {
    background-color: #3f31b5;
    color: #fff;
    border: none;
    vertical-align: baseline;
    width: 120px;
    height: 50px;
    border-radius: 5px;
    cursor: pointer;
    margin: 6px;
    font-size: 16px;
}

.addText {
    margin: 0;
    outline: 0;
    -webkit-appearance: none;
    line-height: 1.21428571em;
    padding: .67857143em 1em;
    font-size: 1em;
    background: #fff;
    border: 1px solid rgba(34, 36, 38, .15);
    color: rgba(0, 0, 0, .87);
    border-radius: .28571429rem;
    -webkit-box-shadow: 0 0 0 0 transparent inset;
    box-shadow: 0 0 0 0 transparent inset;
    -webkit-transition: color .1s ease, border-color .1s ease;
    transition: color .1s ease, border-color .1s ease;
}

.addText:focus {
    color: rgba(0, 0, 0, .95);
    border-color: #85b7d9;
    border-radius: .28571429rem;
    background: #fff;
    -webkit-box-shadow: 0 0 0 0 rgba(34, 36, 38, .35) inset;
    box-shadow: 0 0 0 0 rgba(34, 36, 38, .35) inset;
}

</style>
