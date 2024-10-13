<template>
    <div>
      <ul>
        <li v-for="(song, index) in songs" :key="index">
          {{ song.name }}
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
    methods: {
      deleteSong(index) {
        this.$emit('deleteSong', index);
      }
    }
  };
  </script>
  
  <style>
.del-btn {
  margin-left: 10px;
  padding: 0.6rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 5px;
  font-size: 16px;
}
.del-btn:hover {
  background-color: rgba(0, 0, 0, 0.2);
  color: hsla(160, 100%, 37%, 1);
}
</style>