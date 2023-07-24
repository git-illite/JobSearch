<template>
  <div class="mt-5">
    <input
      v-model.lazy.trim="skillsSearchTerm"
      class="p-3 h-12 border border-solid border-brand-gray-1 shadow-gray rounded w-full text-base"
      type="text"
      placeholder="Computer Programming, Finance Degree"
      data-test="skills-search-input"
    />
  </div>
</template>

<script lang="ts">
import { key } from "@/store";
import { UPDATE_SKILLS_SEARCH_TERM } from "@/store/constants";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "JobFiltersSidebarSkills",
  setup() {
    const store = useStore(key);
    const skillsSearchTerm = computed({
      get() {
        return store.state.skillsSearchTerm;
      },
      set(value) {
        store.commit(UPDATE_SKILLS_SEARCH_TERM, value);
      },
    });

    return { skillsSearchTerm };
  },
});
</script>
