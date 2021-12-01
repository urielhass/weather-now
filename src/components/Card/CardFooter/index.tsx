import {unixToDate} from '../../../utils/formatter';
import styles from './styles.module.scss';

type Props = {
  timestamp: number | undefined;
}
function CardFooter({timestamp}: Props) {
  return (
    <div className={styles.cardFooter}>
      <span>Updated at: {timestamp !== undefined ? unixToDate(timestamp) : ''}</span>
    </div>
  );
}

export default CardFooter;