
import CardFooter from '../CardFooter';
import { ICityWeather } from '../../../interfaces/ICityWeather';
import { useEffect, useState } from 'react';
import { ApiWeatherService } from '../../../services/api';
import CardLoader from '../CardLoader';
import styles from './styles.module.scss';
import CardContentExtra from './CardContentExtra';
import { colorByTemp, refreshTime } from '../../../utils/helper';
import CardError from '../CardError';

type Props = {
  city: string;
  isPrincipal: boolean;
};

function CardContent({city, isPrincipal}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cityWeather, setCityWeather] = useState<ICityWeather | null>(null);

  function refresh() {
    setLoading(true);
    const service = new ApiWeatherService();
    service.execute(city).then((cityWeatherResponse) => {
      setError(false);
      setCityWeather(cityWeatherResponse);
    }).catch(({message}) => {
      setError(true);
    }).finally(() => setLoading(false));
  }

  useEffect(() => {
    refresh();

    setInterval(() => {
      refresh();
    }, refreshTime())
  }, [city])

  function textColor(color: string) {
    switch(color) {
      case 'red':
        return styles.red;

      case 'blue':
        return styles.blue;

      case 'orange':
        return styles.orange;
    }

    return '';
  }

  if (loading) {
    return (
      <CardLoader />
    );
  }


  if (error) {
    return (
      <div className={styles.cardError}>
        <CardError />
        <button onClick={refresh} className={styles.cardBtn}>Try Again</button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.cardContent}>
          <div className={textColor(colorByTemp(cityWeather?.main.temp)) + " " + styles.cardTemp}>
            {cityWeather?.main.temp !== undefined ? Math.round(cityWeather?.main.temp) : 'NaN'}<span className={styles.cardContentGrau}>º</span>
          </div>
      </div>
      { isPrincipal ? 
        <CardContentExtra 
          humidity={cityWeather?.main.humidity}
          pressure={cityWeather?.main.pressure}
        /> : 
        '' 
      }
      <CardFooter timestamp={cityWeather?.dt} />
    </>
  );
}

export default CardContent;