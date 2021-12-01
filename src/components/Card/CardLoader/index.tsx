import loading from '../../../assets/images/loader.svg';
import styles from './styles.module.scss';

function CardLoader() {
  return (
    <div className={styles.cardLoading}>
      <img src={loading} alt="Loading" />
    </div>
  );
}

export default CardLoader;