<template>
 <div class="upload-area"
      @dragover.prevent
      @drop.prevent="handleDrop">
      Drag and drop songs here!
      <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;" accept=".mp3" />
    </div>
    <button class="add-btn" @click="triggerFileInput">Upload</button>

    <div v-if="mySongs.length > 0" class="uploaded-files">
      <h2>Your songs</h2>
      <ul>
        <li v-for="(song, index) in mySongs" :key="index">{{ song.name }}</li>
      </ul>
    </div>

</template>

<script>
export default {
  data() {
    return {
      mySongs: []
    };
  },
  methods: {
    
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    
    
    handleFileUpload(event) {
      const files = event.target.files;
      if (files.length > 0) {
        this.mySongs.push(...files);
      }
    },


    handleDrop(event) {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.mySongs.push(...files);
      }
    }
  }
};
</script>

<style>
.add-btn{
  margin-left: 1%;
  margin-right: auto;
  padding: 0.5rem 1rem;
  background-color: hsla(160, 100%, 37%, 1);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.upload-area {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}


.uploaded-files {
  margin-top: 1rem;
  background: hsla(0, 0%, 100%, 0.1);
  padding: 1rem;
  border-radius: 5px;
}

.uploaded-files h2 {
  margin: 0 0 0.5rem;
}

.uploaded-files ul {
  list-style: none;
  padding: 0;
}

.uploaded-files li {
  color: hsla(160, 100%, 37%, 1);
}
</style>
