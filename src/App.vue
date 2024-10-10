<script>
import Main from './components/Main.vue'
import AiRecognizer from "@/components/AiRecognizer.vue";

export default {
  name: 'app',
  components: {
    AiRecognizer,
    Main,
  },
  data() {
    return {
      isAiRecognizerPage: false,
      username: ''
    };
  },
  methods: {
    switchPage() {
      this.isAiRecognizerPage = !this.isAiRecognizerPage; 
    },
    onLoginClick(username) {
      this.username = username;
    }
  }
};
</script>

<template>
  <div>
    <template v-if="!isAiRecognizerPage">
      <Main @switchPage="switchPage" :username="username"/>
    </template>
    <template v-else>
      <AiRecognizer/>
    </template>
  </div>
</template>
