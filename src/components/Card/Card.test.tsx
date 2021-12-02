import { render, screen, waitFor } from '@testing-library/react';
import { CardLoader } from './CardLoader';
import { Card } from './Card';

jest.setTimeout(30000);

describe('Card render', () => {
  test('renders card loaders', () => {
    render(<CardLoader />);
    const loading = screen.getByTitle(/Loading data/i);
    expect(loading).toBeInTheDocument();
  })

  test('renders card', async () => {
    const city: string = "Joinville, BR";
    const isPrincipal: boolean = false;

    render(<Card city={city} isPrincipal={isPrincipal} />);
    const cardHeader = screen.getByText(/Joinville, BR/i);
    expect(cardHeader).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.getByTitle(/Joinville, BR Weather/i)).toBeInTheDocument();
    }, {
      timeout: 4999
    });
  })
})
