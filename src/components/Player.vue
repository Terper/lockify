<template>
    <div class="player">
        <div class="plr-content">
        <Song></Song>
        <Controls></Controls>
    </div>
    </div>
</template>

<script>
import Song from './Song.vue'
import Controls from './Controls.vue'

export default {
  components: {
    Song,
    Controls 
  }
};
</script>

<style>
/* .player {
  overflow: hidden;
  border: 2px solid hsla(160, 100%, 37%, 1); 
  border-radius: 10px;
  padding: 1rem;
  height: 20%; 
  max-height: 20%; 
  transition: height 0.5s ease, max-height 0.5s ease; 
  display: flex;
  justify-content: center;
}

.plr-content{
    display: flex;
    justify-content: center;
    flex-direction: column;
} */
</style>