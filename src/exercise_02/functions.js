export const getPrice = (itemId) => {
  if (itemId <= 2) return itemId * 100;
  if (itemId <= 5) return itemId * 200;
  if (itemId <= 10) return itemId * 500;
  return 5000 + itemId * 10;
};
