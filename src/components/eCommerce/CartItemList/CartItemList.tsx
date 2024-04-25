import { TProduct } from '@customTypes/product';
import CartItem from '../CartItem/CartItem';

type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandeler: (id: number, quantity: number) => void;
};

const CartItemList = ({ products, changeQuantityHandeler }: CartItemListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandeler={changeQuantityHandeler}
    />
  ));
  return <div>{renderList}</div>;
};

export default CartItemList;
