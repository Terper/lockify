<script>
import Player from './Player.vue'
import Playlist from './Playlist.vue'
import Header from './Header.vue'
import SongList from './SongList.vue'

export default {
    name: 'app',
    components: {
        Player,
        Playlist,
        Header,
        SongList
    },
    data() {
        return {
            isLoggedIn: false,
            mySongs: []
        };
    },
    methods: {
        switchPage() {
            this.$emit('switchPage');
        },
        toggleLoginStatus(isLoggedIn) {
            this.isLoggedIn = isLoggedIn;
        },
        updateMySongs(songs) {
            this.mySongs = songs;
        },
        deleteSong(index) {
            this.mySongs.splice(index, 1);
        },
        clearAllSongs() {
            this.mySongs.splice(0, this.mySongs.length);
        }
    }
};
</script>

<template>
    <div class="wrapper">
        <Header @switchPage="switchPage" @toggle-login-status="toggleLoginStatus" @updateSongs="updateMySongs"></Header>
        <div class="main" v-show=isLoggedIn v-cloak>
            <SongList v-show="isLoggedIn" :songs="mySongs" @deleteSong="deleteSong" @clearSongs="clearAllSongs"></SongList>
            <Playlist v-show=isLoggedIn v-cloak></Playlist>
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
    flex-direction: column;
}
</style>