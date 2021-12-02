import '@testing-library/jest-dom/extend-expect';
import { ApiWeatherService } from './api';


describe('API Service', () => {
  test('loads api exists city', async () => {
    const service = new ApiWeatherService();
    const cityWeather = await service.execute('Joinville, BR');

    expect(cityWeather.name).toBe('Joinville');
  });

  test('loads api not exists city', async () => {
    const service = new ApiWeatherService();
    try {
      const cityWeather = await service.execute('Joinville, AR');

      expect(cityWeather.name).toBe('Joinville');
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data.message).toBe('city not found');
    }
  });
})
