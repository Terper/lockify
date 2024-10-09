<script>
import Main from './components/Main.vue'
import AiRecognizer from "@/components/AiRecognizer.vue";

export default {
  name: 'app',
  components: {
    AiRecognizer,
    Main,
  },
  computed: {
    isAiRecognizerPage() {
      return window.location.pathname === '/ai';
    }
  },
}
</script>

<template>
  <template v-if="!isAiRecognizerPage">
    <Main/>
  </template>
  <template v-else>
    <AiRecognizer/>
  </template>
</template>
