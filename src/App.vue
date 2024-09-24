<script setup>
import Login from './components/Login.vue'
import NowPlaying from './components/NowPlaying.vue'
import Playlist from './components/Playlist.vue'
import MainMenu from './components/MainMenu.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <div class="greetings">
    <h1 class="green">Lockify</h1>
      </div>
    </div>
  </header>

  <main>
      <Login></Login>
    <NowPlaying></NowPlaying>
      <Playlist></Playlist>
      <MainMenu></MainMenu>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
