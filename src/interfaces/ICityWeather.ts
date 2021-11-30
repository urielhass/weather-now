export interface ICityWeather {
  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  }
  weather: [{   
      main: string;
      description: string;
      icon: string;
    }
  ],
  dt: number;
}