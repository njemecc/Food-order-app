import styles from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <h1>Reactmeals</h1>
        <button>cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="meal" />
      </div>
    </>
  );
};

export default Header;
