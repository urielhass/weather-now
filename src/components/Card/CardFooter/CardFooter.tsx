import {unixToTime} from '../../../utils/formatter';
import styles from './styles.module.scss';

type Props = {
  timestamp: number | undefined;
}

export function CardFooter({timestamp}: Props) {
  return (
    <div className={styles.cardFooter}>
      <span>Updated at: {timestamp !== undefined && unixToTime(timestamp)}</span>
    </div>
  );
}