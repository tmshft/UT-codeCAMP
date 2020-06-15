/*
 * UT-codeCAMP Vol 0
 * Unit Test Exercise
 */
import { toFizzBuzz } from "./fizzbuzz";

test("abnormal case", () => {
  expect(() => toFizzBuzz("test")).toThrow(RangeError);
  // TODO テストコードを実装してください
});

test("normal case", () => {
  expect(toFizzBuzz(1)).toBe(1);
  // TODO テストコードを実装してください
});
