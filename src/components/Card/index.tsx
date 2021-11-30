import { useEffect, useState } from 'react';
import { ApiWeatherService } from "../../services/api";
import { ICityWeather } from '../../interfaces/ICityWeather';
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";
import CardLoader from './CardLoader';

type Props = {
  city: string;
}

function Card({city}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [cityWeather, setCityWeather] = useState<ICityWeather | null>(null);

  useEffect(() => {
    setLoading(true);
    const service = new ApiWeatherService();
    service.execute(city).then((cityWeatherResponse) => {
      setCityWeather(cityWeatherResponse);
    }).catch((error) => {
      setError(true);
      setErrorMsg(error.message);
    }).finally(() => setLoading(false));
    
  }, [city])

  return (
    <div className="card">
      <CardHeader title={city}></CardHeader>
      { !loading ? 
        <div>
          <CardContent error={error} errorMsg={errorMsg} weather={cityWeather} />
          <CardFooter></CardFooter>
        </div>
        : <CardLoader /> 
      } 
    </div>
  );
}

export default Card;