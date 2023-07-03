//import { flushPromises, shallowMount, RouterLinkStub } from "@vue/test-utils";
import getJobs from "@/api/getJobs";
import axios from "axios";

jest.mock("axios");

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: {
        id: 1,
        title: "Vue Engineer",
      },
    });
  });

  it("fetch job that candidate can apply to", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://myfakeapi.com/jobs");
  });
  it("fetch returns array of jobs", async () => {
    const data = await getJobs();
    expect(data).toEqual({
      id: 1,
      title: "Vue Engineer",
    });
  });
});
