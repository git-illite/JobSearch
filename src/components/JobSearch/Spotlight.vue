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
export default {
  name: "Spotlight",
  data() {
    return {
      spotlights: [],
    };
  },
  async mounted() {
    const baseUrl = process.env.VUE_APP_BACKEND_URL;
    const response = await axios.get(`${baseUrl}/spotlights`);
    this.spotlights = response.data;
  },
};
</script>
