<script setup>
import {ref} from "vue";

// Определяем пропсы
const props = defineProps({
  music: {
    type: Object,
    required: true,
    default: () => ({
      label: "",
      source: "",
    }),
  },
});

const isPaused = ref(true);
const audioElement = ref();

function togglePlay() {
  const audio = audioElement.value;

  if (!audio) {
    throw new Error("The audio element could not be found");
  }

  if (audio.paused) {
    audio.play();
    isPaused.value = false;
  } else {
    audio.pause();
    isPaused.value = true;
  }
}
</script>

<template>
  <div
      class="animate-fadeIn bg-white w-full flex justify-start items-center px-[16px] py-[8px] rounded"
  >
    <p class="font-medium grow text-zinc-800">
      {{ props.music.label }}
    </p>

    <audio ref="audioElement" :src="props.music.source"></audio>

    <button type="button" @click="togglePlay()" class="text-zinc-700">
      <template v-if="isPaused">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path
              d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
          />
        </svg>
      </template>

      <template v-else>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"/>
          <path
              d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z"
          />
        </svg>
      </template>
    </button>
  </div>
</template>
