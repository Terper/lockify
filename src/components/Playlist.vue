<template>
  <div class="playlist pt-4">
    <!-- playlist selector -->
    <div v-if="selectedPlaylist == -1" class="flex flex-col gap-2">
      <button
        class="border rounded p-2 text-2xl text-white border-[color:hsl(160,100%,37%)]"
        v-for="(playlist, index) in playlists"
        @click="selectPlaylist($event, index)"
      >
        {{ playlist.name }}
      </button>
    </div>

    <!-- track selector -->
    <div
      v-if="selectedPlaylist != -1"
      class="flex flex-col border-[color:hsl(160,100%,37%)] border rounded"
    >
      <!-- back button -->
      <button
        @click="selectPlaylist($event, -1)"
        class="flex items-center justify-between border-b border-[color:hsl(160,100%,37%)] px-4 py-2 text-white relative text-2xl"
      >
        <div class="relative">Back</div>
        <div class="absolute inset-0 text-center py-2">
          {{ playlists[selectedPlaylist].name }}
        </div>
      </button>

      <!-- tracks -->
      <button
        @click="selectTrack($event, index)"
        v-for="(track, index) in playlists[selectedPlaylist].tracks"
        class="flex justify-between items-center text-white px-4 py-2"
      >
        <div class="flex gap-4 items-center">
          <div class="text-2xl">{{ track.title }}</div>
          <div class="text-x opacity-50">{{ track.artist }}</div>
        </div>
        <div class="text-xl">
          {{ formatRuntime(track.runtime) }}
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPlaylist: -1,
      playlists: [
        {
          name: "Bangers",
          tracks: [
            {
              title: "Don't Stop Me Now",
              artist: "Queen",
              runtime: 209000,
            },
            {
              title: "Meat Grinder",
              artist: "MF DOOM",
              runtime: 132000,
            },
          ],
        },
        {
          name: "Mix",
          tracks: [
            {
              title: "Your Graduation",
              artist: "Modern Baseball",
              runtime: 164000,
            },
            {
              title: "Dear Maria, Count Me In",
              artist: "All Time Low",
              runtime: 183000,
            },
          ],
        },
      ],
    };
  },
  methods: {
    selectPlaylist(event, index) {
      this.selectedPlaylist = index;
    },
    selectTrack(event, index) {
      console.log(this.playlists[this.selectedPlaylist].tracks[index]);
    },
    formatRuntime(runtime) {
      const m = Math.floor((runtime / (1000 * 60)) % 60);
      let s = Math.floor((runtime / 1000) % 60);

      // appends 0 if seconds are under 10
      s = s < 10 ? "0" + s : s;

      return `${m}:${s}`;
    },
  },
};
</script>
