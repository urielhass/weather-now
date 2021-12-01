import { render, screen } from '@testing-library/react';
import { CardLoader } from './CardLoader';

describe('Card render', () => {
  test('renders card loaders', () => {
    render(<CardLoader />);
    const loading = screen.getByTitle(/Loading data/i);
    expect(loading).toBeInTheDocument();
  })
})
