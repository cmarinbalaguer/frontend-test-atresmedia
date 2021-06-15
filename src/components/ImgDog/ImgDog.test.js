import React, { Suspense } from 'react';
import { render } from '../../setupTests';
import { ImgDog } from './ImgDog';

test('renders image', () => {
  render(
    <Suspense>
      <ImgDog img="img1.jpg"/>
    </Suspense>
  );
  const imageElement = document.querySelector('img');
  expect(imageElement.src).toContain('img1.jpg');
});
