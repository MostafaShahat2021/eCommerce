import Logo from '../../../assets/svg/cart.svg?react';
import styles from './styles.module.css';
import { useAppSelector } from '@store/hooks';
const { basketContainer, basketQuantity } = styles;

function HeaderBasket() {
  const cartItems = useAppSelector((state) => state.cart.items);
  // console.log(Object.values(cartItems));
  const totalQuantity = Object.values(cartItems).reduce(
    (prev, crt) => prev + crt,
    0
  );
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" style={{ width: 40, height: 30 }} />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
}

export default HeaderBasket;
