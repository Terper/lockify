<script>
import Login from './components/Login.vue'
import Player from './components/Player.vue'
import Playlist from './components/Playlist.vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import AiRecognizer from "@/components/AiRecognizer.vue";

export default {
  name: 'app',
  components: {
    AiRecognizer,
    Login,
    Player,
    Playlist,
    Menu,
    Header
  },
  data() {
    return {
      username: ''
    }
  },
  computed: {
    isAiRecognizerPage() {
      return window.location.pathname === '/ai';
    }
  },
  methods: {
    onLoginClick(username) {
      this.username = username

    }
  }
}
</script>

<template>
  <template v-if="!isAiRecognizerPage">
    <Header :username="username"></Header>
    <div class="main">
    <!-- main -->
    <Login @updateLoginStatus="onLoginClick"></Login>
    <!-- /main -->
    </div>
    <Player></Player>
  </template>
  <template v-else>
    <AiRecognizer/>
  </template>
</template>

<style scoped>
.main{
  flex: 1;
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
