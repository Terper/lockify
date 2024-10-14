<template>
  <div class="playlist pt-4">
    <!-- playlist selector -->
    <div
      v-if="selectedPlaylist == -1"
      class="flex flex-col border rounded border-[color:hsl(160,100%,37%)] divide-y divide-[color:hsl(160,100%,37%)]"
    >
      <div class="p-2" v-for="(playlist, index) in playlists">
        <div class="text-white flex flex-row justify-end relative px-2">
          <button
            class="text-2xl absolute inset-0 text-center hover:opacity-75"
            @click="selectPlaylist($event, index)"
          >
            {{ playlist.name }}
          </button>
          <!-- buttons-->
          <div class="relative flex gap-4 items-center">
            <div class="py-2">
              {{ playlist.tracks.length }}
            </div>
            <div v-if="index != 0" class="text-xs flex flex-col">
              <button
                :disabled="index == 1"
                class="disabled:opacity-50 z-10 hover:opacity-75"
                @click="movePlaylistUp($event, index)"
              >
                ▲
              </button>
              <button
                :disabled="index == playlists.length - 1"
                class="disabled:opacity-50 z-10 hover:opacity-75"
                @click="movePlaylistDown($event, index)"
              >
                ▼
              </button>
            </div>
            <button
              v-if="index != 0"
              class="opacity-50 hover:opacity-100 hover:text-red-400 z-10"
              @click="deletePlaylist($event, index)"
            >
              ✕
            </button>
          </div>
        </div>
      </div>
      <!-- new playlist -->
      <div class="">
        <div
          class="text-white flex flex-row divide-x divide-[color:hsl(160,100%,37%)]"
        >
          <input
            type="text"
            class="bg-transparent flex-grow p-2"
            placeholder="New playlist name"
            v-model="newPlaylistInput"
          />
          <button class="px-4 hover:opacity-75" @click="createPlaylist">
            Create new playlist
          </button>
        </div>
      </div>
    </div>

    <!-- track selector -->
    <div
      v-if="selectedPlaylist != -1"
      class="flex flex-col border-[color:hsl(160,100%,37%)] border rounded divide-y divide-[color:hsl(160,100%,37%)]"
    >
      <!-- back button -->
      <button
        @click="selectPlaylist($event, -1)"
        class="flex items-center justify-between px-4 py-2 text-white relative text-2xl"
      >
        <div class="relative">←</div>
        <div class="absolute inset-0 text-center py-2">
          {{ playlists[selectedPlaylist].name }}
        </div>
        <div class="relative text-base">
          {{ playlists[selectedPlaylist].tracks.length }}
        </div>
      </button>

      <!-- tracks -->
      <div
        v-for="(track, index) in playlists[selectedPlaylist].tracks"
        class="flex items-center text-white"
      >
        <button
          @click="selectTrack($event, index)"
          class="flex justify-between items-center grow p-4"
        >
          <div class="flex gap-4 items-center">
            <div class="text-2xl">{{ track.title }}</div>
            <div class="text-x opacity-50">{{ track.artist }}</div>
          </div>
          <div class="text-xl">
            {{ formatRuntime(track.runtime) }}
          </div>
        </button>
        <!-- buttons -->
        <div class="flex gap-4 px-4 items-center">
          <!-- move to different playlist -->
          <div class="relative">
            <button
              @click="toggleTrackMover($event, index)"
              class="hover:opacity-75"
            >
              ❖
            </button>
            <div
              v-if="trackMover == index"
              class="moverDropdown absolute border-[color:hsl(160,100%,37%)] divide-y divide-[color:hsl(160,100%,37%)] border rounded right-0 flex flex-col z-50 min-w-max"
            >
              <div
                class="text-xs flex gap-4 items-center divide-x divide-[color:hsl(160,100%,37%)]"
              >
                <div class="px-4 py-2">Move to playlist</div>
                <button
                  class="px-4 py-2 hover:opacity-75"
                  @click="toggleTrackMover($event, index)"
                >
                  ✕
                </button>
              </div>
              <div v-for="playlist in getValidPlaylistTargets()">
                <button
                  @click="moveTrackToPlaylist($event, playlist.realIndex)"
                  class="px-4 py-2 bg-inherit hover:opacity-75 w-full text-start"
                >
                  {{ playlist.name }}
                </button>
              </div>
            </div>
          </div>
          <!-- move track -->
          <div class="text-xs flex flex-col">
            <button
              :disabled="index == 0"
              class="disabled:opacity-50 z-10 hover:opacity-75"
              @click="moveTrackUp($event, index)"
            >
              ▲
            </button>
            <button
              :disabled="index == playlists[selectedPlaylist].tracks.length - 1"
              class="disabled:opacity-50 z-10 hover:opacity-75"
              @click="moveTrackDown($event, index)"
            >
              ▼
            </button>
          </div>
          <!-- delete track -->
          <button
            @click="deleteTrack($event, index)"
            class="hover:opacity-75 hover:text-red-400 p-"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import eventBus from "@/eventBus";
export default {
  data() {
    return {
      newPlaylistInput: "",
      selectedPlaylist: -1,
      trackMover: -1,
      playlists: [
        {
          name: "Unsorted",
          tracks: [],
        },
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
      eventBus.$emit(
        "playlistTrackSelected",
        this.playlists[this.selectedPlaylist].tracks[index]
      );
    },
    formatRuntime(runtime) {
      const m = Math.floor((runtime / (1000 * 60)) % 60);
      let s = Math.floor((runtime / 1000) % 60);

      // appends 0 if seconds are under 10
      s = s < 10 ? "0" + s : s;

      return `${m}:${s}`;
    },
    movePlaylistUp(event, index) {
      this.playlists.splice(index - 1, 0, ...this.playlists.splice(index, 1));
    },
    movePlaylistDown(event, index) {
      this.playlists.splice(index + 1, 0, ...this.playlists.splice(index, 1));
    },
    deletePlaylist(event, index) {
      this.playlists.splice(index, 1);
    },
    createPlaylist() {
      if (this.newPlaylistInput.length == 0) {
        return;
      }
      this.playlists.push({ name: this.newPlaylistInput, tracks: [] });
      this.newPlaylistInput = "";
    },
    deleteTrack(event, index) {
      this.playlists[this.selectedPlaylist].tracks.splice(index, 1);
    },
    moveTrackUp(event, index) {
      this.playlists[this.selectedPlaylist].tracks.splice(
        index - 1,
        0,
        ...this.playlists[this.selectedPlaylist].tracks.splice(index, 1)
      );
    },
    moveTrackDown(event, index) {
      this.playlists[this.selectedPlaylist].tracks.splice(
        index + 1,
        0,
        ...this.playlists[this.selectedPlaylist].tracks.splice(index, 1)
      );
    },
    toggleTrackMover(event, index) {
      if (this.trackMover == index) {
        this.trackMover = -1;
      } else {
        this.trackMover = index;
      }
    },
    getValidPlaylistTargets() {
      let validPlaylists = [];
      this.playlists.forEach((playlist, index) => {
        if (index != this.selectedPlaylist) {
          validPlaylists.push({
            name: playlist.name,
            realIndex: index,
          });
        }
      });
      return validPlaylists;
    },
    moveTrackToPlaylist(event, playlistIndex) {
      this.playlists[playlistIndex].tracks.push(
        ...this.playlists[this.selectedPlaylist].tracks.splice(
          this.trackMover,
          1
        )
      );
      this.trackMover = -1;
    },
  },
};
</script>

<style>
.moverDropdown {
  background-color: var(--vt-c-black);
}
</style>
