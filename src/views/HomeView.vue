<template>
  <Hero />
</template>

<script lang="ts">
import Hero from "@/components/JobSearch/Hero.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
  },
});
</script>
