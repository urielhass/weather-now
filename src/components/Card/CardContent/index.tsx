
import CardFooter from '../CardFooter';
import { ICityWeather } from '../../../interfaces/ICityWeather';
import { useEffect, useState } from 'react';
import { ApiWeatherService } from '../../../services/api';
import CardLoader from '../CardLoader';

type Props = {
  city: string;
};

function CardContent({city}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cityWeather, setCityWeather] = useState<ICityWeather | null>(null);

  useEffect(() => {
    setLoading(true);
    const service = new ApiWeatherService();
    service.execute(city).then((cityWeatherResponse) => {
      setCityWeather(cityWeatherResponse);
    }).catch(({message}) => {
      console.log(message);
      setError(true);
    }).finally(() => setLoading(false));
    
  }, [city])

  if (loading) {
    return (
      <CardLoader />
    );
  }


  if (error) {
    return (
      <>
        <div className="card-content">
          algo deu errado, tente novamente
        </div>
        <CardFooter timestamp={cityWeather?.dt}></CardFooter>
      </>
    );
  }

  return (
    <>
      <div className="card-content">
        {cityWeather?.main.temp}
      </div>
      <CardFooter timestamp={cityWeather?.dt}></CardFooter>
    </>
  );
}

export default CardContent;