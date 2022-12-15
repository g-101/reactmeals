import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = props => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total a pagar</span>
        <span>R$35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']}>Voltar</button>
        <button className={classes.button}>Fechar Pedido</button>
      </div>
    </Modal>
  );
};

export default Cart;
