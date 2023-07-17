<template>
  <div class="py-5 border-b border-solid border-brand-gray-2">
    <div
      class="flex flex-wrap items-center justify-between cursor-pointer"
      data-test="clickable-area"
      @click="open"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="w-full mt-5">
      <slot>Someone forgot to populate me</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "Accordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  setup() {
    const isOpen = ref(false);
    const open = () => {
      isOpen.value = !isOpen.value;
    };
    const caretIcon = computed(() =>
      isOpen.value ? ["fas", "angle-up"] : ["fas", "angle-down"]
    );

    return { open, isOpen, caretIcon };
  },
});
</script>
