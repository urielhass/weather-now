import { CardError } from '../CardError';
import styles from './styles.module.scss';
import { CardLoader } from '../CardLoader';
import { CardFooter } from '../CardFooter';
import { useEffect, useState } from 'react';
import { CardContentExtra } from './CardContentExtra';
import { ApiWeatherService } from '../../../services/api';
import { ICityWeather } from '../../../interfaces/ICityWeather';
import { colorByTemp, refreshTime } from '../../../utils/helper';

type Props = {
  city: string;
  isPrincipal: boolean;
};

export function CardContent({city, isPrincipal}: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cityWeather, setCityWeather] = useState<ICityWeather | null>(null);
  const [update, setUpdate] = useState(false);

  function handleUpdate() {
    setUpdate(!update);
  }

  useEffect(() => {
    function refresh() {
      setLoading(true);
      const service = new ApiWeatherService();
      service.execute(city).then((cityWeatherResponse) => {
        setError(false);
        setCityWeather(cityWeatherResponse);
      }).catch(({message}) => {
        setError(true);
      }).finally(
        () => setLoading(false)
      );
    }

    refresh();

    const interval = setInterval(() => {
      refresh();
    }, refreshTime());

    return (() => {
      clearInterval(interval);
    });
  }, [city, update])

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
        <button onClick={handleUpdate} className={styles.cardBtn}>Try Again</button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.cardContent}>
          <div className={textColor(colorByTemp(cityWeather?.main.temp)) + " " + styles.cardTemp}>
            {cityWeather?.main.temp !== undefined && Math.round(cityWeather?.main.temp)}<span className={styles.cardContentGrau}>º</span>
          </div>
      </div>
      { isPrincipal &&
        <CardContentExtra 
          humidity={cityWeather?.main.humidity}
          pressure={cityWeather?.main.pressure}
        />
      }
      <CardFooter timestamp={cityWeather?.dt} />
    </>
  );
}