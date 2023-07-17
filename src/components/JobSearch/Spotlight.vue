<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot
        :img="spotlight.img"
        :title="spotlight.title"
        :description="spotlight.description"
      >
      </slot>
    </li>
  </ul>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent, onMounted, ref } from "vue";

interface Spotlight {
  id: number;
  img: string;
  title: string;
  description: string;
}
export default defineComponent({
  name: "Spotlight",
  setup() {
    const spotlights = ref<Spotlight[]>([]);
    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_BACKEND_URL;
      const response = await axios.get<Spotlight[]>(`${baseUrl}/spotlights`);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);

    return { spotlights };
  },
});
</script>
