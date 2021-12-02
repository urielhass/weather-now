import { render, waitFor, screen } from '@testing-library/react';
import { CardContent } from './CardContent';

jest.setTimeout(30000);

describe('Card content', () => {
  const city: string = 'Joinville, BR';
  const isPrincipal: boolean = true;

  test('renders card content searching by Joinville', async () => {

    render(<CardContent city={city} isPrincipal={isPrincipal} />);

    await waitFor(() => screen.getByTitle('Loading data'));

    await waitFor(() => {
      const temp = screen.getByTitle(/Joinville, BR Weather/i);
      expect(temp).toBeInTheDocument();
    }, {
      timeout: 4999
    });

    expect(screen.getByText(/HUMIDITY/i)).toBeInTheDocument();
    expect(screen.getByText(/PRESSURE/i)).toBeInTheDocument();
  });

  test('renders card content error searching by not existing country', async () => {
    const cityNotFound: string = 'Joinville, AS';

    const { getByTitle } = render(<CardContent city={cityNotFound} isPrincipal={isPrincipal} />);

    await waitFor(() => {
      expect(getByTitle('Loading data')).toBeInTheDocument();
    });

    await waitFor(() => {
      const wrong = screen.getByText(/Something went wrong/i);
      expect(wrong).toBeInTheDocument();
    }, {
      timeout: 4999
    });
  });
})