/*
 * UT-codeCAMP
 * ワーク用テストコード
 *
 * Javaのバージョニング
 */
import { callVersion } from "./version";

describe("異常系", () => {
  test("文字列、デリミッタ", () => {
    expect(() => callVersion("AA")).toThrow(Error);
    expect(() => callVersion("A.A")).toThrow(Error);
    expect(() => callVersion("10,10")).toThrow(Error);
    // TODO テストコードを実装してください
  });
  test("要素数", () => {
    expect(() => callVersion()).toThrow(Error);
    expect(() => callVersion("")).toThrow(Error);
    expect(() => callVersion("11.1.1.1.1")).toThrow(Error);
  });
  test("省略形", () => {
    expect(() => callVersion("10.0")).toThrow(Error);
    expect(() => callVersion("10.1.0")).toThrow(Error);
    expect(() => callVersion("10.1.2.0")).toThrow(Error);
  });
});

describe("正常系", () => {
  test("各要素の取り出し", () => {
    expect(callVersion("11.2.3.4").feature).toEqual(11);
    expect(callVersion("11.2.3.4").interim).toEqual(2);
    expect(callVersion("11.2.3.4").update).toEqual(3);
    expect(callVersion("11.2.3.4").patch).toEqual(4);
  });
  test("フォーマット", () => {
    expect(callVersion("11").interim).toEqual(0);
    expect(callVersion("11.2").update).toEqual(0);
    expect(callVersion("11.2.3").patch).toEqual(0);
  });
  test("バージョン比較", () => {
    expect(callVersion("10.1.2.10").value).toBeGreaterThan(
      callVersion("10.1.2.9").value
    );
    expect(callVersion("10.1.2.10").value).toEqual(
      callVersion("10.1.2.10").value
    );
    expect(callVersion("10.1.2.10").value).toBeLessThan(
      callVersion("10.1.2.11").value
    );
    expect(callVersion("12").value).toBeLessThan(
      callVersion("12.1").value
    );
  });
});
