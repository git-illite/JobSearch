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

<script>
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  name: "Spotlight",
  setup() {
    const spotlights = ref([]);
    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_BACKEND_URL;
      const response = await axios.get(`${baseUrl}/spotlights`);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);

    return { spotlights };
  },
};
</script>
