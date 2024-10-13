<template>
  <div class="min-h-screen flex flex-col" :class="['bg-gradient-to-r from-purple-500 via-pink-500 to-red-500']">
    <header class="sticky top-0 px-[24px] py-[16px] bg-white shadow-md z-10">
      <a href="/" class="font-semibold text-xl text-gray-800">Ai Recognizer</a>
    </header>

    <section class="flex-grow flex items-center justify-center p-[5rem]">
      <div class="grid grid-cols-2 gap-8 w-[min(100%,1000px)] min-md:grid-cols-1">
        <div
            class="aspect-square bg-white rounded-xl shadow-lg py-[10px] px-[16px] transition-transform duration-500 ease-in-out transform hover:scale-105"
            :class="['flex justify-center items-center']"
        >
          <button
              v-if="!cameraStarted && !isProcessing"
              type="button"
              class="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold text-sm py-[10px] px-[20px] rounded-full transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
              @click="startCamera()"
          >
            Start Camera
          </button>

          <div v-else-if="isProcessing">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48px"
                height="48px"
                viewBox="0 0 24 24"
                class="text-gray-700 animate-spin"
            >
              <path
                  fill="currentColor"
                  d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
              >
                <animateTransform
                    attributeName="transform"
                    dur="0.75s"
                    repeatCount="indefinite"
                    type="rotate"
                    values="0 12 12;360 12 12"
                />
              </path>
            </svg>
          </div>

          <div :class="{ hidden: !cameraStarted }">
            <video height="500" width="500" ref="camera" autoplay playsinline/>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg py-[10px] px-[16px] flex flex-col overflow-auto">
          <ul class="flex flex-col gap-y-[12px] w-full overflow-scroll">
            <li
                class="w-full max-w-full"
                v-if="currentMood"
                v-for="(musicItem, key) in currentMood.musicList"
                :key="key"
            >
              <div class="bg-gray-300 rounded-md p-[10px]">
                <MusicPlayer :music="{ label: musicItem.label, source: musicItem.src }"/>
              </div>
            </li>
          </ul>
        </div>


        <div
            v-if="message"
            class="bg-white rounded-xl shadow-lg py-[10px] px-[16px] text-gray-700 break-words"
        >
          {{ message }}
        </div>

        <div v-else class="bg-white rounded-xl shadow-lg py-[10px] px-[16px] text-gray-700">
          Your mood is: {{ currentMood?.mood }}
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {ref} from "vue";
import MusicPlayer from "./MusicPlayer.vue";

const moodList = ref([
  {
    mood: "Sad",
    musicList: [
      {
        label: "Cold Fire – Emotional Piano",
        src: "https://cdn.pixabay.com/download/audio/2024/09/03/audio_cdf98ea77b.mp3?filename=sad-emotional-and-dramatic-piano-237661.mp3",
      },
      {
        label: "JuliusH - Rain and Tears - Sad Piano Music with Rain and Thunderstorm",
        src: "https://cdn.pixabay.com/download/audio/2021/08/29/audio_4b2c695936.mp3?filename=rain-and-tears-sad-piano-music-with-rain-and-thunderstorm-7804.mp3",
      },
    ],
  },
  {
    mood: "Happy",
    musicList: [
      {
        label: "FASSounds – Good Morning - Upbeat Happy Ukulele",
        src: "https://cdn.pixabay.com/download/audio/2024/09/25/audio_5e402fa85f.mp3?filename=good-morning-upbeat-happy-ukulele-244395.mp3",
      },
    ],
  },
]);

const camera = ref();
const message = ref("Click Start to get personal track list");
const currentMood = ref();
const isProcessing = ref(false);
const cameraStarted = ref(false);

async function startCamera() {
  if (!camera.value) {
    return console.log("Camera element not found!");
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({video: true});
    camera.value.srcObject = stream;
    cameraStarted.value = true;
    message.value = "Processing...";

    setTimeout(() => {
      stopCamera();

      setTimeout(() => {
        isProcessing.value = false;
        message.value = null;
        randomizeMood();
      }, 5000);
    }, 5000);
  } catch (error) {
    console.error(error);
    message.value = "Unable to use camera!";
  }
}

function stopCamera() {
  if (!camera.value) return console.log("Camera element not found!");

  const videoStream = camera.value.srcObject;

  if (videoStream) {
    const tracks = videoStream.getTracks();
    tracks.forEach((track) => track.stop());
    camera.value.srcObject = null;
  }

  cameraStarted.value = false;
  isProcessing.value = true;
}

function randomizeMood() {
  const randomIndex = Math.floor(Math.random() * moodList.value.length);
  currentMood.value = moodList.value[randomIndex];
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

body {
  font-family: 'Inter', sans-serif;
}

button {
  transition: all 0.3s ease-in-out;
}

button:hover {
  transform: scale(1.05);
}

ul::-webkit-scrollbar {
  display: none;
}

video {
  border-radius: 8px;
}
</style>
