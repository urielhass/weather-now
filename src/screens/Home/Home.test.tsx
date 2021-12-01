import { Home } from './Home';
import { render } from '@testing-library/react';

describe('Home', () => {
  test('renders home', () => {
    const { getByText } = render(<Home />);

    expect(getByText(/Urubici, BR/i)).toBeInTheDocument();
    expect(getByText(/Nuuk, GL/i)).toBeInTheDocument();
    expect(getByText(/Nairobi, KE/i)).toBeInTheDocument();
  });
})
