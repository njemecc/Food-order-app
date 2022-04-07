import styles from './Cart.module.css';

const Cart = props => {
  const cartItems = (
    <ul className={styles['cart-item']}>
      {[{ id: 'c1', name: 'sushi', price: 10 }].map(cartItem => (
        <li>{cartItem.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>36.22</span>
      </div>
      <div>
        <button className={styles['button--alt']}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
