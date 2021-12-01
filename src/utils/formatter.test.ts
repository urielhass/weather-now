import { unixToDate } from './formatter';

test('utils formatters unix to date -> unixToDate', () => {
  const date = unixToDate(1638331426421);
  expect(date).toBe('3:53:41 AM');
});
