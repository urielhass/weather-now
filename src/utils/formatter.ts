function unixToDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  
  return  date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

export {unixToDate};