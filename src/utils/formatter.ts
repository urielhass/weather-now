function unixToDate(timestamp: number) {
  const date = new Date(timestamp * 1000).toLocaleTimeString('pt-br', {
    hour12: true
  });
  
  return date;
}

export { unixToDate };