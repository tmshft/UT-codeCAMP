import { add, devide } from "./calc";

describe("足し算", () => {
  test("存在確認", () => {
    expect(typeof add).toEqual("function");
  });
  test("整数の足し算", () => {
    expect(add(2, 3)).toBe(5);
  });
  test("小数の足し算", () => {
    expect(add(1.1, 2.2)).toBeCloseTo(3.3);
  });
  test("数値以外を渡す", () => {
    expect(add("a", 2)).toBeNaN();
  });
});
