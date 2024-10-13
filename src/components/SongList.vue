<template>
    <div class="song-container">
        <div class="list-header">
            <span id="title" @click="toggleList">Your songs</span>
            <span id="song-count">{{ songs.length }}</span>
        </div>
        <ul class="song-list" v-show="showSongs && songs.length > 0">
            <button class="clear-btn" @click="clearSongs">Clear</button>
            <li id="song" v-for="(song, index) in songs" :key="index">
                {{ song.name.replace('.mp3', '') }}
                <button class="del-btn" @click="deleteSong(index)">&#128465;</button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        songs: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            showSongs: true
        };
    },
    methods: {
        deleteSong(index) {
            this.$emit('deleteSong', index);
        },
        clearSongs() {
            this.$emit('clearSongs');
        },
        toggleList() {
            this.showSongs = !this.showSongs;
        }
    }
};
</script>

<style>
.clear-btn {
    padding: 0.4rem;
    background-color: transparent;
    border: 1px solid hsl(160, 100%, 37%);
    color: rgb(255, 255, 255);
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;
    font-size: 1rem;
}
.clear-btn:hover {
    background-color: hsla(160, 100%, 37%, 1);
}

.del-btn {
    margin-left: 0.25rem;
    padding: 0.6rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    border-radius: 5px;
    font-size: 1.75rem;
}
.del-btn:hover {
    color: hsla(160, 100%, 37%, 1);
}

.song-container {
    margin-top: 1rem;
    border: 1px solid hsl(160, 100%, 37%);
    border-radius: 0.375rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.list-header {
    display: flex;
    justify-content: space-between;
    width: 100%; 
    align-items: center; 
    cursor: pointer;
}

#title {
    font-size: 1.5rem;
    line-height: 2rem;
    color: rgb(255 255 255); 
    flex-grow: 1;
    text-align: center; 
}

#song-count {
    font-size: 1rem;
    color: rgb(255, 255, 255); 
    padding: 1rem;
}

.song-list {
    border-top: 2px solid hsl(160, 100%, 37%);
    padding: 1rem; 
    width: 100%; 
    margin-top: 0.5rem;
}

#song{
    font-size: 1.25rem;
    line-height: 1rem;
    color: rgb(255 255 255);
}
</style>
