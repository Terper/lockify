<template>
    <div class="header">
        <div class="logoGreeting">
            <img alt="Lockify logo" class="logo" src="../assets/logo-lockify-dark.svg" width="150" height="150"/>
            <div class="greetings">
                <h1 class="green" v-cloak>Lockify♫<br /> Play Yourself {{ username }}</h1>
            </div>
            <Login @toggle-login-status="toggleLoginStatus"></Login>
            <button class="menu-btn" @click="toggleMenu">&#9776;</button>
        </div>
        <div v-if="isHeaderExpanded" class="btn-wrap">
    <Song></Song>
    <button @click="switchPage" class="ai-btn">
      Mood Recognizer
    </button>
        </div>
    </div>
</template>

<script>
import Login from './Login.vue';
import Playlist from './Playlist.vue';
import Song from './Song.vue';

export default {
    data() {
        return {
            isHeaderExpanded: false,
            username: '',
            isLoggedIn: false,
        };
    },
    methods: {
        toggleLoginStatus(username, isLoggedIn) {
            this.username = username;
            this.isLoggedIn = isLoggedIn;
            this.$emit('toggleLoginStatus', this.isLoggedIn);
        },
        toggleMenu() {
            this.isHeaderExpanded = !this.isHeaderExpanded;
        },
        switchPage() {
            this.$emit('switchPage');
        }
    },
    components: {
        Login,
        Playlist,
        Song
    }
};
</script>

<style scoped>
[v-cloak] {
    display: none;
}

.header {
    overflow: hidden;
    border: 2px solid hsla(160, 100%, 37%, 1);
    border-radius: 10px;
    padding: 1rem;
    transition: height 0.5s ease, max-height 0.5s ease;
}

.btn-wrap{
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin-top: auto;
}

.logoGreeting {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 0.5rem;;
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

.menu-btn, .ai-btn, :deep(.login-btn) {
    margin-left: 0.5rem;
    margin-top: auto;
    padding: 0.5rem;
    background-color: hsla(160, 100%, 37%, 1);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    float: right;
}

.menu-btn:hover, .ai-btn:hover, :deep(.login-btn:hover) {
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
