import { render, screen } from '@testing-library/react';
import { CardError } from './CardError';

describe('Card error', () => {
  test('renders card error', () => {
    render(<CardError />);
    const cardError = screen.getByText(/Something went wrong/i);
    expect(cardError).toBeInTheDocument();
  });
})