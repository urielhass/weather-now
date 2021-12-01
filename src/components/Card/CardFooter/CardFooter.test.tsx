import { render, screen } from '@testing-library/react';
import { unixToTime } from '../../../utils/formatter';
import { CardFooter } from './CardFooter';

describe('Card footer', () => {
  test('renders card footer', () => {
    const timestamp: number = 1638331426421;

    render(<CardFooter timestamp={timestamp} />);
    const cardFooter = screen.getByText(/3:53:41 AM/i);
    expect(cardFooter).toBeInTheDocument();
    expect(unixToTime(timestamp)).toBe('3:53:41 AM');
  });
})