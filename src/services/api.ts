import axios from 'axios';
import { ICityWeather } from '../interfaces/ICityWeather';

const api = axios.create({
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