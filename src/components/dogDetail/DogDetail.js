import React from 'react'
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ImgDog } from '../ImgDog/ImgDog';
import { Page } from '../page/Page';
import '../../locale/i18n'
import './DogDetail.scss'

export const DogDetail = () => {

  const { state } = useLocation();
  const {t} = useTranslation();

  return (
    <Page
      title={t('COMMON.DETAIL_DOG')}
      goBackLink={true}
    >
      <div className="contentImgDetail">
        <ImgDog img={state.img} />
      </div>
    </Page>
  )
}
