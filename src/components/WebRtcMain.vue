<template>
  <div class="hello">

    <label>聊天室名稱</label> 
    <div class="roomField">
      <input v-model="roomId" class="addText" placeholder="請輸入聊天室名稱" />
    </div>
    
    <div>
 <vue-webrtc ref="webrtc"
    :roomId="roomId"
    v-on:joined-room="logEvent"
    v-on:left-room="logEvent"
    v-on:opened-room="logEvent"
    v-on:share-started="logEvent"
    v-on:share-stopped="logEvent"
    @error="onError" 
    />
</div>
    
    <div class="row">
    <div class="chatBtn">
        <button class="addBtn" @click="onJoin">進入視訊聊天</button>
        <button class="leaveBtn" @click="onLeave">離開</button>
        <!-- <button class="captureBtn" @click="onCapture">Capture Photo</button>
        <button class="shareBtn" @click="onShareScreen">Share Screen</button> -->
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

<style type="text/css">
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

@media screen and (max-width:768px){
  .video-list > div:nth-child(2){
    width: 100vw;
  }
  .video-list > div:nth-child(2) > video{
    margin: 0 auto;
    width: 100%;
  }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

a.link.item{
    padding-left:10% !important;
    padding-right:10% !important;
    padding-bottom:0 !important;
}
.vsm-title{
    font-size: 1.313rem !important;
}
.ui.labeled.icon.menu .item{
    min-width:20vw;
    padding:3px;
    h3{
        margin-top:0px;
    }
}
.first_view{
  // margin: 0 65px;
}
.title_bar {
    padding:0 !important;
    height:5vh; 
    position: fixed !important;
    top: 0;
    right: 0;
    z-index:999;
    background: -webkit-linear-gradient(left,rgb(85, 201, 236),rgb(0, 154, 243)) !important;
    background: -o-linear-gradient(right,rgb(29, 203, 226),rgb(0, 154, 243)) !important;
    background: -moz-linear-gradient(right,rgb(29, 203, 226),rgb(0, 154, 243)) !important;
    background: linear-gradient(to right,rgb(29, 203, 226),rgb(0, 154, 243)) !important;
}

@media screen and (max-width:991px){
   .ui.bottom.fixed.menu{
     display: inline-flex;
   }
   .title_bar{
     display: none;
   }
   .v-sidebar-menu.vsm-collapsed{
     display: none;
   }
 }

@media screen and (min-width:992px){
  .ui.bottom.fixed.menu{
    display: none;
  }
  .title_bar{
    display: block;
  }
    .v-sidebar-menu.vsm-collapsed{
     display: block;
   }
}



.roomField{
  margin: 0 0 2rem 6rem;
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
    background: #ffffff!important;
    border: 1px solid #999;
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
    background: #d0d0d0!important;
    -webkit-box-shadow: 0 0 0 0 rgba(34, 36, 38, .35) inset;
    box-shadow: 0 0 0 0 rgba(34, 36, 38, .35) inset;
}
.opName{
  font-size: 32px;
  color:#fff;
  margin: 22px;
}
</style>