import nextElementInList from "@/utils/nextElementInList";

describe("next element in list", () => {
  it("locates and returns next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";

    const result = nextElementInList(list, value);
    expect(result).toBe("D");
  });

  describe("when element is at the end of the list", () => {
    it("locates next element at start of list", () => {
      const list = ["A", "B", "C", "D", "E"];
      const value = "E";

      const result = nextElementInList(list, value);
      expect(result).toBe("A");
    });
  });
});
