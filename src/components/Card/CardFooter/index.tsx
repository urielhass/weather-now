import {unixToDate} from '../../../Utils/formatter';

type Props = {
  timestamp: number | undefined;
}
function CardFooter({timestamp}: Props) {
  console.log(timestamp)
  return (
    <div className="card-footer">
      <span>Atualizado em: {timestamp !== undefined ? unixToDate(timestamp) : ''}</span>
    </div>
  );
}

export default CardFooter;