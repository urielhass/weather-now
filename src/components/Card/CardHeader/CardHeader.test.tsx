import { render, screen } from '@testing-library/react';
import { CardHeader } from './CardHeader';

describe('Card header', () => {
  test('renders card headers city', () => {
    var title: string = "Urubici";

    render(<CardHeader title={title} />);
    const cardTitle = screen.getByText(title);
    expect(cardTitle).toBeInTheDocument();
  });
})