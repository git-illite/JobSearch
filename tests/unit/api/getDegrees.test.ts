//import { flushPromises, shallowMount, RouterLinkStub } from "@vue/test-utils";
import getDegrees from "@/api/getDegrees";
import axios from "axios";

jest.mock("axios");

const AxiosGetMock = axios.get as jest.Mock;

describe("getDegrees", () => {
  beforeEach(() => {
    AxiosGetMock.mockResolvedValue({
      data: {
        id: 1,
        degree: "Master's",
      },
    });
  });

  it("fetches all degree types", async () => {
    await getDegrees();
    expect(AxiosGetMock).toHaveBeenCalledWith("http://myfakeapi.com/degrees");
  });
  it("fetch returns array of degrees", async () => {
    const data = await getDegrees();
    expect(data).toEqual({
      id: 1,
      degree: "Master's",
    });
  });
});
