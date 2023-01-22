import { getClassesToApply } from "./styles";

describe("getClassesToApply function", () => {
  it("should return received string array as string", () => {
    expect(getClassesToApply("class1", "class2")).toBe("class1 class2");
  });

  it("should sanitize received array and return string", () => {
    expect(
      getClassesToApply("class1", undefined, "class3", null, false && "class2")
    ).toBe("class1 class3");
  });
});
