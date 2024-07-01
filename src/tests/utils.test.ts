import { classNames } from "../helpers/utils";

describe("classNames utility", () => {
  test("returns a single class when one argument is provided", () => {
    expect(classNames("class1")).toBe("class1");
  });

  test("returns a concatenated string of classes", () => {
    expect(classNames("class1", "class2")).toBe("class1 class2");
  });

  test("filters out falsy values", () => {
    expect(classNames("class1", undefined, "class2", false, null, "class3")).toBe(
      "class1 class2 class3",
    );
  });

  test("returns an empty string when no arguments are provided", () => {
    expect(classNames()).toBe("");
  });
});
