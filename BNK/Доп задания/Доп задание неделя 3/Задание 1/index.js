const groceries = {
    "73Wakv": {
      name: "Orange Juice",
      price: 1.5,
      discount: 10
    },
    "5L3db9": {
      name: "Chocolate",
      price: 2,
      discount: 0
    }
    // more items...
  };
  
  function getTotalPriceOfShoppingBag(shoppingBagArray) {
    let totalPrice = 0;
  
    shoppingBagArray.forEach(item => {
      const product = groceries[item.productId];
      if (product) {
        const discountMultiplier = (100 - product.discount) / 100;
        const itemTotalPrice = product.price * discountMultiplier * item.count;
        totalPrice += itemTotalPrice;
      }
    });
  
    return totalPrice.toFixed(2);
  }
  
  const shoppingBag = [
    { productId: "73Wakv", count: 3 },
    { productId: "5L3db9", count: 28 }
  ];
  
  const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
  console.log("totalPrice", totalPrice);