
import { ICityWeather } from '../../../interfaces/ICityWeather';

type Props = {
  error: boolean;
  weather: ICityWeather | null;
  errorMsg: string;
};

function CardContent(props: Props) {
  if (props.error) {
    return (
      <div className="card-content">
        algo deu errado, tente novamente
      </div>
    );
  }

  return (
    <div className="card-content">
      Temperatura
    </div>
  );
}

export default CardContent;