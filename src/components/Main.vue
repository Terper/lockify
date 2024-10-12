<script>
import Player from './Player.vue'
import Playlist from './Playlist.vue'
import Header from './Header.vue'

export default {
    name: 'app',
    data() {
        return {
            username: ''
        };
    },
    components: {
        Player,
        Playlist,
        Header
    },
    methods: {
      toggleLoginStatus(username) {
            this.username = username;
        },
        switchPage() {
            this.$emit('switchPage');
        }
    }
}
</script>

<template>
    <div class="wrapper">
      <Header @switchPage="switchPage" :username="username" @toggleLoginStatus="toggleLoginStatus"></Header>
        <div class="main">
        <Playlist v-if="username"></Playlist>
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
    flex-direction: column;
}
</style>