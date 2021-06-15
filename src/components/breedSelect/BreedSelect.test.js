import React, { Suspense } from 'react';
import { render, screen } from '../../setupTests';
import BreedSelectPage from '../../containers/breedSelect/BreedSelectPage';

describe('test in BreedSelect component', () => {
  test('show empty select', () => {
    render(
      <Suspense>
        <BreedSelectPage />
      </Suspense>
    );
    const select = screen.getByText(/Seleccione Raza/i);
    expect(select).toBeInTheDocument();
  });

  test('renders breeds list', () => {
    const options = {
      initialState: {
        breedList: {
          list: [
            { id: 'breed1', value: 'Breed1' },
            { id: 'breed2', value: 'Breed2' }
          ]
        }
      }
    };
    render(
      <Suspense>
        <BreedSelectPage />
      </Suspense>,
      options
    );
    
    const breed1Element = screen.getByText(/Seleccione Raza/i);
    expect(breed1Element).toBeInTheDocument();
  });
});