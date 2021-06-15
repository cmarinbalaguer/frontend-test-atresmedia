import React, { Suspense } from 'react';
import { render, screen } from '../setupTests';
import App from './App';

test('renders title app', () => {
  render(
    <Suspense>
      <App />
    </Suspense>
  );
  const title = screen.getByText(/Dog breeds images/i);
  expect(title).toBeInTheDocument();
});
