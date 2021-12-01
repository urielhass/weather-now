import styles from './styles.module.scss';

type Props = {
  humidity: number | undefined;
  pressure: number | undefined;
}


function CardContentExtra({humidity, pressure}: Props) {
  return (
    <div className={styles.cardContentExtra}>
      <div>
        <span>HUMIDITY</span><br />
        <strong>{humidity}%</strong>
      </div>
      <div>
        <span>PRESSURE</span> <br />
        <strong>{pressure}<span>hPa</span></strong>
      </div>
    </div>
  );
}

export default CardContentExtra;