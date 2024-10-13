<template>
 <div class="upload-area"
      @dragover.prevent
      @drop.prevent="handleDrop">
      Drag and drop songs here!
      <input type="file" ref="fileInput" @change="handleFileUpload" style="display: none;" accept=".mp3" />
    </div>
    <button class="add-btn" @click="triggerFileInput">Upload</button>
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
        this.$emit('updateSongs', this.mySongs);
      }
    }, 


    handleDrop(event) {
      const files = event.dataTransfer.files;
      if (files.length > 0) {
        this.mySongs.push(...files);
        this.$emit('updateSongs', this.mySongs);
      }
    }
  }
};
</script>

<style>
.add-btn{
  margin: 0.5rem auto 0 0.5rem;
  padding: 1rem;
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
</style>
