<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput($event: Event) {
      const target = $event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
  },
});
</script>
