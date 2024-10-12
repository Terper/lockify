<script>
import Player from './Player.vue'
import Playlist from './Playlist.vue'
import Header from './Header.vue'

export default {
    name: 'app',
    components: {
        Player,
        Playlist,
        Header
    },
    data() {
        return {
            isLoggedIn: false,
        };
    },
    methods: {
        switchPage() {
            this.$emit('switchPage');
        },
        toggleLoginStatus(isLoggedIn) {
            this.isLoggedIn = isLoggedIn;
        }
    }
}
</script>

<template>
    <div class="wrapper">
        <Header @switchPage="switchPage" @toggle-login-status="toggleLoginStatus"></Header>
        <div class="main" v-show=isLoggedIn v-cloak>
        </div>
        <Player v-show=isLoggedIn v-cloak></Player>
    </div>
</template>


<style scoped>
[v-cloak] {
    display: none;
}

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