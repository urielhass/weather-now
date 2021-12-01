import { CardHeader } from "./CardHeader";
import { CardContent } from "./CardContent";
import styles from './styles.module.scss';

type Props = {
  city: string;
  isPrincipal: boolean;
}

export function Card({city, isPrincipal}: Props) {
  return (
    <div className={styles.card + " " + (isPrincipal && styles.cardPrincipal)}>
      <CardHeader title={city} />
      <CardContent city={city} isPrincipal={isPrincipal} />
    </div>
  );
}