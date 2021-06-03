import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const titleElement = screen.getByText(/software avanzado/i);
  expect(titleElement).toBeInTheDocument();
  const nameElement = screen.getByText(/ricardo andre/i);
  expect(nameElement).toBeInTheDocument();
  const carneElement = screen.getByText(/200915461/i);
  expect(carneElement).toBeInTheDocument();
});
