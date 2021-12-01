import { colorByTemp, cacheTime, refreshTime} from './helper';

test('utils helpers colors by temp -> colorByTemp', () => {
  const blue = colorByTemp(-1);
  expect(blue).toBe('blue');

  const red = colorByTemp(35);
  expect(red).toBe('red');

  const orange = colorByTemp(19);
  expect(orange).toBe('orange');
});

// test('utils helpers colors by temp -> colorByTemp', () => {
//   const color = colorByTemp(-1);
//   expect(color).toBe('blue');
// });
