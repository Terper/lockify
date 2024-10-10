<template>
  <div class="header">
    <div class="logoGreeting">
      <img alt="Lockify logo" class="logo" src="../assets/logo-lockify.svg" width="125" height="125" />
      
      <div class="greetings">
        <h1 class="green">Lockify♫<br /> Play Yourself {{ username }}</h1>
      </div>
      
      <button class="menu-btn" @click="toggleMenu">X</button>
    </div>
    <div class="ai-wrap">
    <button v-if="isHeaderExpanded" @click="switchPage" class="ai-btn">
      Mood Recognizer
    </button>
  </div>
    <Playlist v-if="isHeaderExpanded"></Playlist>
  </div>
</template>

<script>
import Playlist from './Playlist.vue';

export default {
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isHeaderExpanded: false  
    };
  },
  methods: {
    toggleMenu() {
      this.isHeaderExpanded = !this.isHeaderExpanded;  
    },
    switchPage() {
      this.$emit('switchPage');
    },
  },
  components: {
    Playlist 
  }
};
</script>

<style>
.header {
  overflow: hidden;
  border: 2px solid hsla(160, 100%, 37%, 1); 
  border-radius: 10px;
  padding: 1rem;
  transition: height 0.5s ease, max-height 0.5s ease; 
}

.ai-wrap{
  display: flex;
}

.logoGreeting {
  display: flex; 
  align-items: center; 
  justify-content: space-between; 
  width: 100%; 
}

.logo {
  margin-right: 1rem; 
}

.greetings {
  display: flex; 
  align-items: center; 
}

.greetings h1 {
  margin: 0;
}

.menu-btn, .ai-btn {
  margin-left: auto; 
  padding: 0.5rem 1rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-btn:hover, .ai-btn:hover {
  background-color: hsla(160, 100%, 37%, 0.8);
}

.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
  font-size: 2rem;
}
</style>
