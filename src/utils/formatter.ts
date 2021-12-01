function unixToTime(timestamp: number) {
  const time = new Date(timestamp * 1000).toLocaleTimeString('pt-br', {
    hour12: true
  });
  
  return time;
}

export { unixToTime };