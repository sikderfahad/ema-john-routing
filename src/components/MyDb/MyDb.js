const addToDb = (id) => {
  let shoppingCart = getShoppingCart();

  const quantity = shoppingCart[id];

  quantity ? (shoppingCart[id] = +quantity + 1) : (shoppingCart[id] = 1);

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const deleteShoppingCart = () => localStorage.removeItem("shopping-cart");

export { addToDb, getShoppingCart, removeFromDb, deleteShoppingCart };
