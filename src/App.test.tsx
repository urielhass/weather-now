import { render, screen } from '@testing-library/react';
import App from './App';

test('renders principal card test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Urubici, BR/i);
  expect(linkElement).toBeInTheDocument();
});
