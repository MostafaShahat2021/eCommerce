import { TProduct } from '@customTypes/product';
import CartItem from '../CartItem/CartItem';

type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandeler: (id: number, quantity: number) => void;
  removeItemHandeler: (id: number) => void;
};

const CartItemList = ({ products, changeQuantityHandeler, removeItemHandeler }: CartItemListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandeler={changeQuantityHandeler}
      removeItemHandeler={removeItemHandeler}
    />
  ));
  return <div>{renderList}</div>;
};

export default CartItemList;
