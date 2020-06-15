/*
 * UT-codeCAMP
 *
 * 以下のメソッドのテストコードを実装してください。
 * add / devide
 *
 * 必要なテストケース
 * - 関数の存在確認
 * - 整数演算、小数演算
 * - 数値以外の引数付与
 *
 */
import { add, devide } from "./calc";

describe("足し算", () => {
  test("整数の足し算", () => {
    expect(add(2, 3)).toBe(5);
  });
  // TODO ここにテストコードの続きを書いてください
});

describe("割り算", () => {
  test("存在確認", () => {
    expect(typeof devide).toEqual("function");
  });
  // TODO ここにテストコードの続きを書いてください
});
