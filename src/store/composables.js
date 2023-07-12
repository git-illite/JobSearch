import { computed } from "vue";
import { useStore } from "vuex";
import {
  FILTERED_JOBS,
  UNIQUE_JOB_TYPES,
  UNIQUE_ORGANIZATIONS,
  FETCH_JOBS,
} from "@/store/constants";

/* GETTERS */
export const useFilteredJobs = () => {
  const store = useStore();
  return computed(() => store.getters[FILTERED_JOBS]);
};

export const useUniqueJobTypes = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_JOB_TYPES]);
};

export const useUniqueOrganizations = () => {
  const store = useStore();
  return computed(() => store.getters[UNIQUE_ORGANIZATIONS]);
};

/* ACTIONS */
export const useFetchJobsDispatch = () => {
  const store = useStore();
  store.dispatch(FETCH_JOBS);
};
