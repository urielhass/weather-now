import styles from './styles.module.scss';

type Props = {
  title: string;
}
function CardHeader({title}: Props)  {
  return (
    <div className={styles.cardHeader}>
      <h4>{title}</h4>
    </div>
  );
}

export default CardHeader;