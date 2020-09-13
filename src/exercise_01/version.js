/*
 * UT-codeCAMP
 * ワーク用プロダクトコード
 *
 * Javaのバージョニング
 *
 */
export function callVersion(expression) {
  return new Version(expression);
}

class Version {
  constructor(expression) {
    var p = expression.split(".");

    if (expression === "" || p.length < 1 || p.length > 4) {
      throw new Error("invalid expression");
    }

    for (var i = 0; i < p.length; i++) {
      if (isNaN(Number(p[i]))) {
        throw new Error("invalid expression");
      }
    }

    // 要素の取得
    this.feature = Number(p[0]);
    if (p.length === 1) {
      this.interim = 0;
      this.update = 0;
      this.patch = 0;
    } else if (p.length === 2) {
      this.interim = Number(p[1]);
      this.update = 0;
      this.patch = 0;
    } else if (p.length === 3) {
      this.interim = Number(p[1]);
      this.update = Number(p[2]);
      this.patch = 0;
    } else {
      this.interim = Number(p[1]);
      this.update = Number(p[2]);
      this.patch = Number(p[3]);
    }

    // バージョンをチェック
    if (this.feature < 10) {
      throw new Error("Major versions smaller than 10 are invalid");
    }

    // 省略表記の誤りチェック
    if (p.length === 2 && Number(p[1]) === 0) {
      throw new Error("Zero interim shoulde be omitted");
    } else if (p.length === 3 && Number(p[2]) === 0) {
      throw new Error("Zero update shoulde be omitted");
    } else if (p.length === 4 && Number(p[3]) === 0) {
      throw new Error("Zero patch shoulde be omitted");
    }
  }

  // バージョンの数値化
  get value() {
    return Number(
      ("000" + this.feature).slice(-3) +
        ("000" + this.interim).slice(-3) +
        ("000" + this.update).slice(-3) +
        ("000" + this.patch).slice(-3)
    );
  }
}
