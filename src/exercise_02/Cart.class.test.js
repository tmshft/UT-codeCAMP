// import Cart from "./Cart.class";

// describe("Example", () => {
//   test("<正常系>", () => {
//     // 操作を記述
//     const cart = new Cart();
//     // 商品をカートに追加
//     cart.setItem({ id: 1, quantity: 1 });
//     // 数量を2に変更
//     cart.setItem({ id: 1, quantity: 2 });

//     // 出力を定義
//     const output = cart.getItemList();
//     // 期待値を定義
//     const expected = new Map([[1, { id: 1, quantity: 2 }]]);
//     // 出力と期待値が合っているか確認
//     expect(output).toEqual(expected);
//   });
//   test("<異常系>", () => {
//     // 異常操作時に例外が投げられることを確認
//     expect(() => {
//       // 異常操作を記述
//       const cart = new Cart();
//       // マイナス個の商品をカートに追加
//       cart.setItem({ id: 1, quantity: -1 });
//     }).toThrow("quantity is non-negative integer");
//   });
// });

// // TODO 以下にテストコードを実装してください
