<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
        data-test="job-listing"
      />
    </ol>
  </main>
</template>

<script>
import axios from "axios";
import JobListing from "@/components/JobResults/JobListing.vue";

export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  data() {
    return {
      jobs: [],
      //BACKEND_URL: "",
    };
  },
  computed: {
    displayedJobs() {
      return this.jobs.slice(0, 10);
    },
  },
  async mounted() {
    // this.BACKEND_URL = process.env.VUE_APP_BACKEND_URL;
    // console.log("env " + process.env.VUE_APP_BACKEND_URL);
    const response = await axios.get("http://localhost:3000/jobs");
    this.jobs = response.data;
    //console.log(response);
  },
};
</script>
