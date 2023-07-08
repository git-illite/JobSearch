<template>
  <accordion header="Job Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="JobTypes in UNIQUE_JOB_TYPES"
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
import { mapGetters, mapMutations } from "vuex";
import { ADD_SELECTED_JOB_TYPES, UNIQUE_JOB_TYPES } from "@/store/constants";
import Accordion from "@/components/Shared/Accordion.vue";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: {
    Accordion,
  },
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectJobTypes() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
