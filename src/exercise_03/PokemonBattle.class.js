// 定数の定義
// 天気相性
const WEATHER_MATCH = {
  NORMAL: 1,
  WEAKENED: 2,
  REINFORCED: 3,
};
// タイプ相性
const TYPE_PATTERN = {
  KOUKAHA_BATSUGUNDA: 1,
  KOUKAHA_IMAHITOTSUNOYOUDA: 2,
  KOUKAGA_NAIMITAIDA: 3,
};

/**
 * ポケモンバトル（簡易版）クラス
 */
class PokemonBattle {
  constructor(stats) {
    // こうげきするポケモンのレベル 整数型 1~100
    this.level = stats.level;
    // こうげきわざのいりょく 整数型 1~
    this.power = stats.power;
    // こうげき 整数型 1~
    this.attack = stats.attack;
    // ぼうぎょ 整数型 1~
    this.defense = stats.defense;

    // ここから下は、上級者用の変数
    // こうげきするポケモンと天気の相性
    this.weatherMatch = stats.weatherMatch ? stats.weatherMatch : WEATHER_MATCH.NORMAL;
    // こうげきするポケモンとわざタイプが一致しているかどうか
    this.moveTypeMatchFlag = stats.moveTypeMatchFlag ? stats.moveTypeMatchFlag : false;
    // こうげきするポケモンがやけど状態かどうか
    this.burnFlag = stats.burnFlag ? stats.burnFlag : false;
    // こうかはばつぐんだ、こうかはいまひとつのようだ、こうかがないみたいだ...のいずれか
    this.typePattern = stats.typePattern ? stats.typePattern : null;
  }

  /**
   * 基礎ダメージ計算を行う
   * テスト対象: 初心者向け
   *
   * 仕様
   * ダメージ = [[[Lv * 0.4 + 2] * 威力 * こうげき / ぼうぎょ] / 50 + 2]
   * []は切り捨て
   * @return number
   */
  baseDamage = () => Math.floor(
    Math.floor(((this.level * 0.4 + 2) * this.power * this.attack) / this.defense) / 50 + 2,
  );

  /**
   * きゅうしょにあたった！のダメージ計算を行う
   * テスト対象: 上級者向け
   * @return number
   */
  criticalDamage = () => {
    let result = this.baseDamage();
    // きゅうしょにあたった！の計算
    // わかりやすくするために、今回は急所確率を50%にしている
    if (Math.random() >= 0.50) result *= 2;
    return result;
  }

  /**
   * 各種補正値を加えて最終ダメージ計算を行う
   * テスト対象: ひまな人向け
   * これでも実際のポケモンより随分と変数を減らしていますが、
   * それでもきついと思うので、本当に余裕のあるチームだけやってみてください。
   * もはやテスト作成者の自己満まであるなコレ
   * @return number
   */
  finalDamage = () => {
    let result = this.baseDamage();
    // 弱化天気の場合は威力が1/2になる
    if (this.weatherMatch === WEATHER_MATCH.WEAKENED) result *= 1 / 2;
    // 強化天気の場合は威力が3/2になる
    if (this.weatherMatch === WEATHER_MATCH.REINFORCED) result *= 3 / 2;
    // わざタイプ一致の場合は威力が3/2になる
    if (this.moveTypeMatchFlag) result *= 3 / 2;
    // やけどの場合は威力が1/2になる
    if (this.burnFlag) result *= 1 / 2;
    // タイプ相性によって威力が変化する
    // こうかはばつぐんだ -> 2倍
    // こうかはいまひとつだ -> 0.5倍
    // こうかがないみたいだ -> 0倍
    if (this.typePattern === TYPE_PATTERN.KOUKAHA_BATSUGUNDA) {
      result *= 2;
    } else if (this.typePattern === TYPE_PATTERN.KOUKAHA_IMAHITOTSUNOYOUDA) {
      result *= 1 / 2;
    } else {
      result *= 0;
    }
    return Math.floor(result);
  };
}

export default PokemonBattle;
