import { unixToTime } from './formatter';

describe('Formatters', () => {
  test('utils formatters unix to date -> unixToTime', () => {
    const time = unixToTime(1638331426421);
    expect(time).toBe('3:53:41 AM');
  });  
})