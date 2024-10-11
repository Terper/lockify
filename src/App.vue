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
            isAiRecognizerPage: false
        };
    },
    methods: {
        switchPage() {
            this.isAiRecognizerPage = !this.isAiRecognizerPage;
        }
    }
};
</script>

<template>
    <div>
        <template v-if="!isAiRecognizerPage">
            <Main @switchPage="switchPage"/>
        </template>
        <template v-else>
            <AiRecognizer/>
        </template>
    </div>
</template>
