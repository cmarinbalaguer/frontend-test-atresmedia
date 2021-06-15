import React, { Suspense } from 'react';
import { render, screen } from '../../setupTests';
import BreedSelectPage from '../../containers/breedSelect/BreedSelectPage';

describe('test in BreedSelect component', () => {
  test('render title breedSelect', () => {
    render(
      <Suspense>
        <BreedSelectPage />
      </Suspense>
    );
    const title = screen.getByText(/Imágenes de perros según su raza/i);
    expect(title).toBeInTheDocument();
  });
});