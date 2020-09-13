/*
 * UT-codeCAMP
 * ワーク用テストコード
 *
 * Javaのバージョニング
 */
import { callVersion } from "./version";

describe("正常系", () => {
  test("＜TODO テストスコープを記載＞", () => {
    expect(() => callVersion("")).toThrow(Error);
    // TODO テストコードを実装してください
  });
});

describe("正常系", () => {
  test("＜TODO テストスコープを記載＞", () => {
    expect(callVersion("11.2.3.4").feature).toEqual(11);
    // TODO テストコードを実装してください
  });
});
