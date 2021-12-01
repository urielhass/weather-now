import loading from '../../../assets/images/loader.svg';
import styles from './styles.module.scss';

export function CardLoader() {
  return (
    <div className={styles.cardLoading}>
      <img src={loading} alt="Loading" title="Loading data" />
    </div>
  );
}