import { Heading } from '@components/common';
import { CartItemList, CartSubtotalPrice } from '@components/eCommerce';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
} from '@store/cart/cartSlice';
import { Loading } from '@components/feedback';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandeler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );
  const removeItemHandeler = useCallback((id: number) => {
    // console.log(id);
    dispatch(cartItemRemove(id))
  }, [dispatch]);
  return (
    <>
      <Heading>Your Cart</Heading>
      <Loading status={loading} error={error}>
        <CartItemList
          products={products}
          changeQuantityHandeler={changeQuantityHandeler}
          removeItemHandeler={removeItemHandeler}
        />
        <CartSubtotalPrice />
      </Loading>
    </>
  );
};

export default Cart;
