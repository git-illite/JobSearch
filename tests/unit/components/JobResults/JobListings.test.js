import { flushPromises, shallowMount } from "@vue/test-utils";
import JobListings from "@/components/JobResults/JobListings.vue";
import axios from "axios";

jest.mock("axios");

describe("JobListings", () => {
  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("creates a job listing for a max of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(10).fill({}) });
    const wrapper = shallowMount(JobListings);
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});
