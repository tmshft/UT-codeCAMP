/*
 * UT-codeCAMP Vol 0
 *
 * exercise/fizzbuzz.jsに実装された
 * toFizzBuzz()を見て
 * テストコードを実装してください。
 *
 */
import { toFizzBuzz } from "./fizzbuzz";

test("abnormal case", () => {
  expect(() => toFizzBuzz("test")).toThrow(RangeError);
});

test("normal case", () => {
  expect(toFizzBuzz(1)).toBe(1);
});
