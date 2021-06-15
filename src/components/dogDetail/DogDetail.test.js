import React, { Suspense } from 'react';
import { createMemoryHistory } from 'history'
import { render, screen } from '../../setupTests';
import { DogDetail } from './DogDetail';
import { Router } from 'react-router-dom'

test('renders title dogDetail', () => {
  const history = createMemoryHistory();
  history.location.state = {img: 'img.jpg'}
  render(
    <Router history={history}>
      <DogDetail />
    </Router>);
  const title = screen.getByText(/Detalle de la imagen del perro/i);
  expect(title).toBeInTheDocument();
});