import { render, screen } from '@testing-library/react';
import App from './App';

test('Test Webpage', () => {
  render(<App />);
  const linkElement = screen.getByText(/Software Developer/i);
  expect(linkElement).toBeInTheDocument();
});
