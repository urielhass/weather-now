export interface ICityWeather {
  main: IMain;
  name: string;
  weather: [IWeather];
  dt: number;
}

export interface IWeather {
  main: string;
  description: string;
  icon: string;
}

export interface IMain {
  temp: number;
  humidity: number;
  pressure: number;
  temp_min: number;
  temp_max: number;
}