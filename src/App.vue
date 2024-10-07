<script>
import Login from './components/Login.vue'
import Player from './components/Player.vue'
import Playlist from './components/Playlist.vue'
import Menu from './components/Menu.vue'

export default {
    name: 'app',
    components: {
        Login,
        Player,
        Playlist,
        Menu
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
    <header class="logoGreeting">
        <img alt="Lockify logo" class="logo" src="./assets/logo-lockify.svg" width="125" height="125"/>
        <div class="wrapper">
            <div class="greetings">
                <h1 class="green">Lockify♫<br> Play Yourself {{ username }}</h1>
            </div>
        </div>
    </header>
    <Login @updateLoginStatus="onLoginClick"></Login>
    <!-- main -->
    <menu>
        <Menu></Menu>
    </menu>
    <Player></Player>
    <Playlist></Playlist>
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
