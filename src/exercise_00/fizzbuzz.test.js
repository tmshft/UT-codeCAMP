/*
 * UT-codeCAMP Vol 0
 * ワーク用テストコード
 */
import { callFizzBuzz } from "./fizzbuzz";

test("abnormal case", () => {
  expect(() => callFizzBuzz("test")).toThrow(RangeError);
  // TODO テストコードを実装してください
});

test("normal case", () => {
  expect(callFizzBuzz(3)).toBe("Fizz");
  // TODO テストコードを実装してください
});
