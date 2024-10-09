<script>
import Login from './Login.vue'
import Player from './Player.vue'
import Playlist from './Playlist.vue'
import Menu from './Menu.vue'
import Header from './Header.vue'

export default {
  name: 'app',
  components: {
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
  methods: {
    onLoginClick(username) {
      this.username = username

    }
  }
}
</script>

<template>
  <div class="wrapper">
    <Header :username="username"></Header>
    <div class="main">
      <!-- main -->
      <Login @updateLoginStatus="onLoginClick"></Login>
      <!-- /main -->
    </div>
    <Player></Player>
  </div>
</template>


<style scoped>
.wrapper {
  background: var(--vt-c-black);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 10rem;
  padding-right: 10rem;
}

a {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
  font-family: revert;
}

.main {
  display: flex;
  height: 100%;
  flex-direction: column;
}
</style>

