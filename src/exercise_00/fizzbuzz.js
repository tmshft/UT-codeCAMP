/*
 * UT-codeCAMP Vol 0
 * ワーク用プロダクトコード
 *
 * 3の倍数ならばFizzを返す
 * 5の倍数ならばBuzzを返す
 * 15の倍数ならばFizzBuzzを返す
 * それ以外の数値ならばそのまま返す
 * 1以下、整数以外、数値以外はRangeErrorとなる
 *
 * 引用元: https://qiita.com/jintz/items/61af86a12b53b24ef121
 *
 */
export function callFizzBuzz(num) {
  if (outOfRange(num))
    throw new RangeError("引数エラー、1以上の整数ではないようです");

  if (isFizz(num) && isBuzz(num)) return "FizzBuzz";
  if (isFizz(num)) return "Fizz";
  if (isBuzz(num)) return "Buzz";
  return num;
}

// 引数のチェック
const outOfRange = num => {
  if (!(typeof num === "number")) return true;
  if (Math.round(num) !== num) return true;
  if (num <= 1) return true;

  return false;
};

const isFizz = num => {
  return num % 3 === 0;
};

const isBuzz = num => {
  return num % 5 === 0;
};
