<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
import { computed, toRefs } from "vue";
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  setup(props) {
    const { type } = toRefs(props);
    const buttonClass = computed(() => {
      return {
        [type.value]: true,
      };
    });

    return { buttonClass };
  },
  // computed: {
  //   buttonClass() {
  //     return {
  //       [this.type]: true,
  //     };
  //   },
  // },
};
</script>

<style scoped>
button {
  @apply px-5 py-3  font-medium;
}
.primary {
  @apply text-white rounded bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
