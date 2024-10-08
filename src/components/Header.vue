<template>
    <div :class="['menu', { 'menu-expanded': isMenuExpanded }]">
      <header class="logoGreeting">
        <img alt="Lockify logo" class="logo" src="../assets/logo-lockify.svg" width="125" height="125" />
        
        <div class="greetings">
          <h1 class="green">Lockify♫<br /> Play Yourself {{ username }}</h1>
        </div>
        
        <button class="menu-btn" @click="toggleMenu">X</button>
      </header>
      <Playlist v-if="isMenuExpanded"></Playlist>
    </div>
  </template>
  

  <script>
  import Playlist from './Playlist.vue'

export default {
  props: {
    username: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isMenuExpanded: false  
    };
  },
  methods: {
        toggleMenu() {
            this.isMenuExpanded = !this.isMenuExpanded;  
        },
    },
  components: {
    Playlist, 
  }
};

  </script>

<style>
.menu {
  overflow: hidden;
  border: 2px solid hsla(160, 100%, 37%, 1); 
  border-radius: 10px;
  padding: 1rem;
  height: 20%; 
  max-height: 20%; 
  transition: height 0.5s ease, max-height 0.5s ease; 
}

.menu-expanded {
  height: 80%; 
  max-height: 80%; 
  transition: height 0.5s ease, max-height 0.5s ease; 
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

.menu-btn {
  margin-left: auto; 
  padding: 0.5rem 1rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.menu-btn:hover {
  background-color: hsla(160, 100%, 37%, 0.8);
}

</style>