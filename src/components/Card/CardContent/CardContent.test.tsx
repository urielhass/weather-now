import { render, waitFor, screen } from '@testing-library/react';
import { CardContent } from './CardContent';

jest.setTimeout(30000);

describe('Card content', () => {
  const city: string | undefined = 'Joinville, BR';
  const isPrincipal: boolean = true;
  test('renders card content searching by Joinville', async () => {

    render(<CardContent city={city} isPrincipal={isPrincipal} />);

    await waitFor(() => screen.getByTitle('Loading data'));

    await waitFor(() => {
      screen.getByTitle(/Joinville, BR Weather/i);
    }, {
      timeout: 4999
    });

    expect(screen.getByText(/HUMIDITY/i)).toBeInTheDocument();
    expect(screen.getByText(/PRESSURE/i)).toBeInTheDocument();
  });
})