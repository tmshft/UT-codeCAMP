/*
type Item = {
  id: number,
  quantity: number,
};
type ItemList = {
  [itemId]: Item
};
*/
import { getPrice } from "./functions";

class Cart {
  constructor() {
    this.itemList = {};
  }

  setItem = (item) => {
    this.itemList[item.id] = item;
  };

  deleteItem = (itemId) => {
    delete this.itemList[itemId];
  };

  getItemList = () => this.itemList;

  setQuantity = (itemId, num) => {
    if (num < 0 || !Number.isInteger(num)) {
      throw new Error("num is non-negative integer");
    }
    this.itemList[itemId].quantity = num;
  };

  getTotalPrice = () => Object.keys(this.itemList).reduce(
    (acc, cur) => acc + getPrice(this.itemList[cur].id) * this.itemList[cur].quantity,
    0,
  );
}

export default Cart;
