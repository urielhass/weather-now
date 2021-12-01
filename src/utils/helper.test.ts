import { colorByTemp, cacheTime, refreshTime} from './helper';

describe('helpers', () => {
  test('utils helpers colors by temp -> colorByTemp', () => {
    const blue = colorByTemp(-1);
    expect(blue).toBe('blue');
  
    const red = colorByTemp(35);
    expect(red).toBe('red');
  
    const orange = colorByTemp(19);
    expect(orange).toBe('orange');
  });
  
  test('utils helpers cache time -> cacheTime', () => {
    const time = cacheTime();
  
    expect(time).toEqual(10*60*1000);
  });
  
  test('utils helpers refresh time', () => {
    const time = refreshTime();
  
    expect(time).toEqual(10*60*1000);
  
    expect(time).toBeGreaterThan(0*60*1000);
  });
})