export const calculateTotalPrice = (cart, setTotalPrice, setShippingPrice) => {
  let result = 0;
  cart.forEach((item) => {
    const checked = item?.checked;
    const price = item?.product?.price;
    const count = item?.count;
    if (checked) {
      result += price * count;
      setTotalPrice(result);
      setShippingPrice(result * 0.05);
    } else {
      setTotalPrice(0);
      setShippingPrice(0);
    }
  });
};
