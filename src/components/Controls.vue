<template>
  <div class="footer">
    <div class="whatSong">
      <img src="../assets/albumcover.webp" alt="" />
      <div class="nameAndArtist">
        <h4 class="nameSong">{{ nameSong }}</h4>
        <p class="artist">{{ artist }}</p>
      </div>
    </div>

    <div class="navPlaying">
      <button class="previouse" @click="restartSong">&#8249;</button>
      <button class="play" v-if="isPlaying" @click="changeButton">
        &#10074;&#10074;
      </button>
      <button class="play" v-else @click="changeButton">&#9654;</button>
      <button class="next">&#8250;</button>
    </div>

    <div class="expand">
      <button>&#10529;</button>
    </div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";

export default {
  data() {
    return {
      isPlaying: false,
      nameSong: "",
      artist: "",
      audio: null
    };
  },
  methods: {
    changeButton() {
      if (this.audio) {
            if (this.isPlaying) {
                this.audio.pause();
            } else {
                this.audio.play(); 
            }
            this.isPlaying = !this.isPlaying;
        }
    },
    restartSong() {
      if (this.audio) {
        this.audio.currentTime = 0; 
        this.audio.play();  
        this.isPlaying = true;
        }
    }
},
mounted() {
  eventBus.$on("playlistTrackSelected", (track) => {
    this.nameSong = track.title;
    this.artist = track.artist;
    
    if (this.audio) {
      this.audio.pause();
    }
    this.audio = track.audio;
    this.audio.currentTime = 0;
    this.audio.play();
    this.isPlaying = true;

    this.audio.addEventListener('ended', () => {
      this.isPlaying = false;
    });
  });
},
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: "Helvetica";
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: inherit;
  padding: 10px 20px;
  position: relative;
}

img {
  width: 50px;
  height: 50px;
}

.whatSong {
  display: flex;
  align-items: center;
}

.nameAndArtist {
  padding-left: 10px;
}

.nameSong {
  align-self: baseline;
}

.navPlaying {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}

.previouse {
  background-color: inherit;
  padding: 0 4px;
  border: 0;
  font-size: 22px;
  /* text-shadow: 0 1px 3px grey; */
}

.play {
  background-color: inherit;
  border: 0;
  border-radius: 100%;
  padding: 4px 7px;
  margin: 0 5px;
  /* box-shadow: 0 1px 3px black; */
}

.play:active {
  color: black;
  /* box-shadow: 0 0 0; */
}

.next {
  background-color: inherit;
  padding: 0 4px;
  border: 0;
  font-size: 22px;
  /* text-shadow: 0 1px 3px grey; */
}

.next:active,
.previouse:active,
.expand button:active {
  color: black;
  /* text-shadow: 0 0 0; */
}

.expand button {
  background-color: inherit;
  padding: 0 4px;
  border: 0;
  font-size: 25px;
  /* text-shadow: 0 1px 3px grey; */
}

button:hover {
  color: hsla(160, 100%, 37%, 1);
}
</style>
