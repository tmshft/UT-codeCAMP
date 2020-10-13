import Cart from "./Cart.class";

//describe("abnormal cases", () => {
//  test("<TODO please describe your test scope>", () => {
//    expect(() => new Cart()).toThrow(Error);
//    // TODO テストコードを実装してください
//  });
//});

describe("normal cases", () => {
  test("<TODO please describe your test scope>", () => {
    const cart = new Cart();
    // 商品をカートに追加
    cart.setItem({ id: 1, quantity: 1 });
    // 数量を2に変更
    cart.setQuantity(1, 2);
    // 変更されていることを確認
    expect(cart.getItemList()).toEqual({ 1: { id: 1, quantity: 2 } });
    // TODO テストコードを実装してください
  });
});
