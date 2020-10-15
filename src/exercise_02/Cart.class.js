/*
引数itemの型
type Item = {
  id: number,
  quantity: number, // 商品の個数
};
*/
import ITEM_MAP from "./ITEM_MASTER";

// テスト不要の関数
// 自然数かどうか判定する
const isNatural = num => (num > 0 && Number.isInteger(num));

class Cart {
  constructor() {
    this.itemList = new Map();
  }

  /**
   * カートの中身を見る関数
   * @return itemList: Map<number, Item}>
   */
  getItemList = () => this.itemList;

  /**
   * カートに商品を入れる関数
   * @param item: Item
   */
  setItem = (item) => {
    // item.id, item.quantityの存在チェック
    if (!("id" in item)) throw new Error("argument must have id");
    if (!("quantity" in item)) throw new Error("argument must have quantity");

    // item.id, item.quantityのバリデート
    if (!isNatural(item.id)) throw new Error("id is non-negative integer");
    if (!isNatural(item.quantity)) throw new Error("quantity is non-negative integer");

    this.itemList.set(item.id, item);
  };

  /**
   * カートから商品を除く関数
   * @param itemId: number
   */
  deleteItem = (itemId) => {
    // itemIdのバリデート
    if (!isNatural(itemId)) throw new Error("itemId is non-negative integer");

    this.itemList.delete(itemId);
  };

  /**
   * カートの商品の合計金額を返す関数
   * @return totalPrice: number
   */
  getTotalPrice = () => this.itemList.reduce(
    (acc, cur) => acc + ITEM_MAP.get(cur.id).price * cur.quantity,
    0,
  );
}

export default Cart;
