function colorByTemp(temp: number | undefined) {
  if (temp === undefined) {
    return '';
  }
  
  var color = 'red';

  if (temp <= 5) {
    color = 'blue';
  } else if (temp > 5 && temp < 25) {
    color = 'orange';
  }

  return color;
}

function cacheTime() {
  var cacheTime = Number(process.env.REACT_APP_CACHE_TIME_MINUTES);

  if (cacheTime <= 0 || cacheTime === undefined || isNaN(cacheTime)) {
    cacheTime = 10;
  }

  return cacheTime * 60 * 1000
}

function refreshTime() {
  var refreshTime = Number(process.env.REACT_APP_REFRESH_WEATHER_TIME_MINUTES);

  if (refreshTime <= 0 || refreshTime === undefined || isNaN(refreshTime)) {
    refreshTime = 10;
  }

  return refreshTime * 60 * 1000
}

export { colorByTemp, cacheTime, refreshTime };