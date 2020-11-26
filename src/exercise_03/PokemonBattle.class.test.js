import PokemonBattle from './PokemonBattle.class';

/**
 * describe()の第1引数は、第2引数の処理をdescribe（説明）するために使います。
 * describe()の第2引数は、実行される一連の処理です。
 *
 * この例では、一番外側で「PokemonBattleクラスのテスト」であることを説明し、
 * その下に「正常系」と「異常系」があることを説明しています。
 * なので、その下に書かれるテストはすべて「PokemonBattleクラスについての」
 * 「正常系」または「異常系」なテスト、ということになります。
 *
 * このようにdescribeを適切に用いることで、テストコードを構造化することができ、見通しやすくなります。
 */
describe("PokemonBattleクラスのテスト", () => {
  describe("正常系", () => {
    /**
     * test()の第1引数は、テスト結果時にタイトルとして使われます。
     * test()の第2引数は、テストを走らせたときに実行される処理です。
     * なので、第2引数に「テスト手順の実行」と「期待値」と「その2つの比較」を記述します。
     */
    test("正常系のサンプル1", () => {
      // テスト手順の実行
      const output = new PokemonBattle({
        level: 25,
        power: 40,
        attack: 80,
        defense: 30,
      }).baseDamage();

      // 期待値を定義
      const expected = 27;

      // 出力と期待値が合っているか確認
      expect(output).toEqual(expected);
    });

    /**
     * 上記はわかりやすく書きました
     * 一時変数の定義を端折って以下のように書いてもいいです。
     */
    test("正常系のサンプル2", () => {
      expect(new PokemonBattle({
        level: 25,
        power: 40,
        attack: 80,
        defense: 30,
      }).baseDamage()).toEqual(27);
    });
  });

  describe("異常系", () => {
    /**
     * 異常系は、expectの第一引数に関数を書きます。
     * 関数内で、異常が生じる操作を実行し、
     * 外側でtoThrow()を用いて例外を比較します。
     */
    test("異常系のサンプル", () => {
      expect(() => {
        // 異常操作(PokemonBattleに初期値が与えられていない)を記述
        new PokemonBattle();
      }).toThrow("Cannot read property 'level' of undefined");
    });
  });

  // TODO describe()とtest()を用いてテストコードを記述してください
});

