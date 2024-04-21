import { getCartTotalQuantitySelectore } from '@store/cart/cartSlice';
import Logo from '../../../assets/svg/cart.svg?react';
import styles from './styles.module.css';
import { useAppSelector } from '@store/hooks';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const { basketContainer, basketQuantity, pumpCartQuantity, basketCart } = styles;

function HeaderBasket() {
  const navigate = useNavigate()
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCartTotalQuantitySelectore);
  const quantityStyle = `${basketQuantity} ${
    isAnimate ? pumpCartQuantity : ''
  } `;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [totalQuantity, setIsAnimate]);

  return (
    <div className={basketContainer} onClick={()=> navigate('/cart')}>
      <div className={basketCart}>
      <Logo title="basket icon" style={{ width: 40, height: 30 }} />
      <div className={quantityStyle}>{totalQuantity}</div>
      </div>
      <h3>Cart</h3>
    </div>
  );
}

export default HeaderBasket;
