import { useState, useEffect } from 'react';
import { useAppDispatch } from '@store/hooks';
import { TProduct } from '@customTypes/product';
import { Button, Spinner } from 'react-bootstrap';
import { addToCart } from '@store/cart/cartSlice';
import styles from './styles.module.css';

const { product, productImg } = styles;

const Product = ({ id, title, price, img }: TProduct) => {
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    // setIsBtnDisabled(true);
    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
  return (
    <div className={product} key={id}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button
        variant="info"
        style={{ color: 'white' }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            loading...
          </>
        ) : (
          'Add to cart'
        )}
      </Button>
    </div>
  );
};

export default Product;
