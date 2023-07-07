import {
  UNIQUE_ORGANIZATIONS,
  FILTERED_JOBS_BY_ORGANIZATIONS,
  UNIQUE_JOB_TYPES,
  FILTERED_JOBS_BY_JOB_TYPES,
} from "@/store/constants";

const getters = {
  //ORGANIZATIONS
  [UNIQUE_ORGANIZATIONS](state) {
    const uniqueOrganizations = new Set();
    state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
    return uniqueOrganizations;
  },
  [FILTERED_JOBS_BY_ORGANIZATIONS](state) {
    if (state.selectedOrganizations.length === 0) return state.jobs;
    else
      return state.jobs.filter((job) =>
        state.selectedOrganizations.includes(job.organization)
      );
  },
  //JOB TYPES
  [UNIQUE_JOB_TYPES](state) {
    const uniqueJobs = new Set();
    state.jobs.forEach((job) => uniqueJobs.add(job.jobType));
    return uniqueJobs;
  },
  [FILTERED_JOBS_BY_JOB_TYPES](state) {
    if (state.selectedJobTypes.length === 0) return state.jobs;
    else
      return state.jobs.filter((job) =>
        state.selectedJobTypes.includes(job.jobType)
      );
  },
};
export default getters;
