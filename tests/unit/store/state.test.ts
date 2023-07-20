import state from "@/store/state";

describe("state", () => {
  it("keeps track of whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("stores job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });

  it("stores all degree that jobs may require", () => {
    const startingState = state();
    expect(startingState.degrees).toEqual([]);
  });

  it("stores organizations that the user has selected", () => {
    const startingState = state();
    expect(startingState.selectedOrganizations).toEqual([]);
  });

  it("stores job types the user has selected", () => {
    const startingState = state();
    expect(startingState.selectedJobTypes).toEqual([]);
  });
});
