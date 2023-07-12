<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="JobTypes in uniqueJobTypes"
            :key="JobTypes"
            class="w-1/2 h-8"
          >
            <input
              :id="JobTypes"
              v-model="selectedJobTypes"
              :value="JobTypes"
              type="checkbox"
              class="mr-3"
              :data-test="JobTypes"
              @change="selectJobTypes"
            />
            <label :for="JobTypes" data-test="job-type">{{ JobTypes }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion>
</template>

<script>
import { useStore } from "vuex";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
import { ref } from "vue";
import { useUniqueJobTypes } from "@/store/composables";
import { useRouter } from "vue-router";

import Accordion from "@/components/Shared/Accordion.vue";
export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordion,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobTypes();
    const selectJobTypes = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResults" });
    };
    return { selectedJobTypes, uniqueJobTypes, selectJobTypes };
  },
};
</script>
