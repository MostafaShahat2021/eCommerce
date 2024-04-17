// import { getCartTotalQuantitySelectore } from '@store/cart/selectors';
import { getCartTotalQuantitySelectore } from '@store/cart/cartSlice';
import Logo from '../../../assets/svg/cart.svg?react';
import styles from './styles.module.css';
import { useAppSelector } from '@store/hooks';
const { basketContainer, basketQuantity } = styles;

function HeaderBasket() {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelectore);
  
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" style={{ width: 40, height: 30 }} />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
}

export default HeaderBasket;
