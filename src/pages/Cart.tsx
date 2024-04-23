import { Heading } from '@components/common';
import { CartItemList, CartSubtotalPrice } from '@components/eCommerce';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetProductsByItems } from '@store/cart/cartSlice';
import { Loading } from '@components/feedback';


const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector((state) => state.cart);
  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({...el, quantity: items[el.id]}))
  return (
    <>
      <Heading>Your Cart</Heading>
      <Loading status={loading} error={error}>
      <CartItemList products={products}/>
        <CartSubtotalPrice />
      </Loading>
    </>
  );
};

export default Cart;
