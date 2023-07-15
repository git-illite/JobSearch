import actions from "@/store/actions";
import getJobs from "@/api/getJobs";

jest.mock("@/api/getJobs");

const getJobsMock = getJobs as jest.Mock;
describe("actions", () => {
  describe("FETCH_JOBS", () => {
    beforeEach(() => {
      getJobsMock.mockResolvedValue([
        {
          id: 1,
          title: "Software developer",
        },
      ]);
    });
    fit("makes request to fetch jobs", async () => {
      const context = { commit: jest.fn() };
      await actions.FETCH_JOBS(context);
      expect(getJobsMock).toHaveBeenCalled();
    });
    fit("sends message to save received jobs in store", async () => {
      const commit = jest.fn();
      const context = { commit };
      await actions.FETCH_JOBS(context);
      expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
        {
          id: 1,
          title: "Software developer",
        },
      ]);
    });
  });
});
