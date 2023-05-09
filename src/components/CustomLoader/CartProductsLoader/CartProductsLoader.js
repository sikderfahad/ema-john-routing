import { getShoppingCart } from "../../MyDb/MyDb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedCart = products.find((pd) => pd.id === id);
    if (addedCart) {
      const quantity = storedCart[id];
      addedCart.quantity = quantity;

      savedCart.push(addedCart);
    }
  }

  return savedCart;
};

export { cartProductsLoader };
