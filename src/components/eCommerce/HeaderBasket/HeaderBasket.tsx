import Logo from '../../../assets/svg/cart.svg?react';
import styles from './styles.module.css';
import { useAppSelector } from '@store/hooks';
import { getCartTotalQuantity } from '@store/cart/cartSlice';
const { basketContainer, basketQuantity } = styles;

function HeaderBasket() {
  const totalQuantity = useAppSelector(getCartTotalQuantity);
  
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" style={{ width: 40, height: 30 }} />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
}

export default HeaderBasket;
