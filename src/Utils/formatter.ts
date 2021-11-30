function unixToDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  
  console.log(timestamp);
  return  date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

export {unixToDate};