import { Form, Button } from 'react-bootstrap';
import { TProduct } from '@customTypes/product';
import styles from './styles.module.css';
import { memo } from 'react';

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type CartItemProps = TProduct & {changeQuantityHandeler: (id: number, quantity: number) => void;};

const CartItem = memo(({ title, img, price, max, quantity, id, changeQuantityHandeler }: CartItemProps) => {
  console.log("render");
  const renderOptions = Array(max)
    .fill(0)
    .map((_, idx) => {
      const quantity = ++idx;
      return (
        <option value={quantity} key={quantity}>
          {quantity}
        </option>
      );
    });

    const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>)=>{
      const quantity = +event.target.value
      changeQuantityHandeler(id, quantity)
    }
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price.toFixed(2)} EGP</h3>
          <Button
            variant="secondary"
            style={{ color: 'white', width: '100px' }}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1" >Quantity</span>
        <Form.Select value={quantity} onChange={changeQuantity}>{renderOptions}</Form.Select>
      </div>
    </div>
  );
});

export default CartItem;
