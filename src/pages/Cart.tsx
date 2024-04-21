import { Heading } from '@components/common';
import { CartItem, CartSubtotalPrice } from '@components/eCommerce';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetProductsByItems } from '@store/cart/cartSlice';
const Cart = () => {
  const dispatch = useAppDispatch()
  const {} = useAppSelector((state) => state.cart)
  useEffect(() => {
    dispatch(actGetProductsByItems())
  }, [dispatch])
  return (
    <>
      <Heading>Your Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSubtotalPrice/>
    </>
  );
};

export default Cart;
