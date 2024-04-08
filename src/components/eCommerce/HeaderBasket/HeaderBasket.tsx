import Logo from '../../../assets/svg/cart.svg?react';
import styles from './styles.module.css';

const { basketContainer, basketQuantity } = styles;

function HeaderBasket() {
  return (
    <div className={basketContainer}>
      <Logo title="basket icon" style={{ width: 40, height: 30 }} />
      <div className={basketQuantity}>0</div>
    </div>
  );
}

export default HeaderBasket;
