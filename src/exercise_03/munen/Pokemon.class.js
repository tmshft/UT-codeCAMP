import { REQUIRED_EXP } from './const.js';

/**
 * TODO: つくりかけ。Vol.4以降で教材として使いたい。
 * ポケモンクラス
 * ポケモンを捕まえた時や交換した時にインスタンスを生成する。
 * バトル、アイテム使用、ポケモンセンターなどでインスタンスに対して操作を行う。
 * バトル中しか効果のないバフ/デバフなどは、バトルクラスにて管理する。
 */
class Pokemon {
  constructor(pokemon) {
    this.status = {
      maxhp: pokemon.maxhp,
      hp: pokemon.hp,
      level: pokemon.level,
      exp: pokemon.exp,
      attack: pokemon.attack,
      defense: pokemon.defense,
      speed: pokemon.speed,
      type: pokemon.type,
    };
  }

  /**
   * ポケモンの状態を確認する
   */
  showStatus = () => this.status;

  /**
   * 経験値を計算する
   */
  calculateExp = (gainedExp) => {
    // 蓄積経験値と合算する
    let totalExp = this.status.exp + gainedExp;
    // TODO: レベルアップの計算
    // 必要経験値テーブルを参照して、いくつレベルが上がるのか計算する
    // let flag = true;
    // while (flag) {
    //   REQUIRED_EXP[this.status.level]
    // }

    // あまり経験値
    this.status = {
      ...this.status,
      level: totalExp,
    };
  };
  
  /**
   * レベルアップの処理
   * TODO: こうげき、ぼうぎょ、すばやさがいくつ上がるか、ルールを用意せねば
   */
  levelUp = () => {
    this.status = {
      ...this.status,
      level: this.status.level + 1,
      attack: Math.floor(this.status.attack * 1.1),
      defense: Math.floor(this.status.defense * 1.09),
      speed: Math.floor(this.status.speed + this.status.level / 10),
    };
  };
}

export default Pokemon;
