import { render } from '@testing-library/react';
import { CardContentExtra } from './CardContentExtra';

describe('Card content extra', () => {
  const humidity: number | undefined = 87;
  const pressure: number | undefined = 870;
  test('renders card content extra', () => {
    const {getByText} = render(<CardContentExtra humidity={humidity} pressure={pressure} />);
    
    expect(getByText(humidity)).toBe(humidity);
    expect(getByText(pressure)).toBe(humidity);
    expect(getByText('HUMIDITY')).toBeInTheDocument();
  });
})