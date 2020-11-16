import PokemonBattle from './PokemonBattle.class';

describe("Example", () => {
  test("<正常系>", () => {
    // 操作を記述
    const pb = new PokemonBattle({
      level: 25,
      power: 40,
      attack: 80,
      defense: 30,
    });

    // 出力を定義
    const output = pb.baseDamage();
    // 期待値を定義
    const expected = 27;
    // 出力と期待値が合っているか確認
    expect(output).toEqual(expected);
  });
  test("<異常系>", () => {
    // 異常操作時に例外が投げられることを確認
    expect(() => {
      // 異常操作を記述
      new PokemonBattle();
    }).toThrow("Cannot read property 'level' of undefined");
  });
});

// TODO 以下にテストコードを実装してください
