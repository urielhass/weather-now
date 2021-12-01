import axios from 'axios';
import { setupCache } from 'axios-cache-adapter'
import { ICityWeather } from '../interfaces/ICityWeather';
import { cacheTime } from '../utils/helper';

const cache = setupCache({
  maxAge: cacheTime()
});

const api = axios.create({
  adapter: cache.adapter,
  baseURL: `${process.env.REACT_APP_WEATHER_API_BASE_URL}?appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
});


class ApiWeatherService {
  async execute(city: string) {
    const { data: cityWeatherResponse } = await api.get<ICityWeather>('', {
      params: {
        q: city
      }
    });

    return cityWeatherResponse;
  }
}

export { ApiWeatherService }