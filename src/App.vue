<script>
import Login from './components/Login.vue'
import Player from './components/Player.vue'
import Playlist from './components/Playlist.vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'

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
    mounted() {
        console.log("Loaded app. Hello " + this.username)
    },
    methods: {
        onLoginClick(username) {
            this.username = username
            
        }
    }
}
</script>

<template>
    <Header :username="username"></Header>
    <!-- main -->
    <Login @updateLoginStatus="onLoginClick"></Login>
    <!-- /main -->
</template>

<style scoped>
header {
    line-height: 1.5;
    grid-area: logoGreeting;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

menu {
    grid-area: menu;
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
