export interface ICityWeather {
  main: IMain
  weather: [{   
      main: string;
      description: string;
      icon: string;
    }
  ],
  dt: number;
}

export interface IMain {
  temp: number;
  humidity: number;
  pressure: number;
  temp_min: number;
  temp_max: number;
}