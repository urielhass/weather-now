import { render, screen } from '@testing-library/react';
import { Header } from '.';

describe('Header', () => {
  test('renders header', () => {
    render(<Header />);
    const logoHeader = screen.getByTitle(/Logo Weather Now/i);
    expect(logoHeader).toBeInTheDocument();
  })
});
