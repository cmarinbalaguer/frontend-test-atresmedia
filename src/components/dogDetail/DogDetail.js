import React from 'react'
import { useLocation } from 'react-router-dom';
import { ImgDog } from '../ImgDog/ImgDog';
import { Page } from '../page/Page';

export const DogDetail = () => {

  const { state } = useLocation();

  return (
    <Page
      title="Dog datail"
      goBackLink={true}
    >
      <ImgDog img={state.img} />
    </Page>
  )
}
