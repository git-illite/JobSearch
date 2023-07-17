<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="w-full my-4 font-light text-base">
        It's awesome working here. Why don't you join us?
      </h2>
    </template>
  </header-container>
</template>

<script lang="ts">
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "TeamsView",
  components: {
    HeaderContainer,
  },
});
</script>
