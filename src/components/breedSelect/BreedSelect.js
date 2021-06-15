import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { BreedDog } from '../breedDog/BreedDog';

import { Box, Container } from '@material-ui/core';
import { Page } from '../page/Page';
import { Loader } from '../common/loader/Loader';
import { ErrorRequest } from '../common/errorRequest/ErrorRequest';

import '../../locale/i18n'
import './BreedSelect.scss'
import { InputSelect } from '../common/inputs/InputSelect';
import { useState } from 'react';


export const BreedSelect = (
  {
    list,
    fetchBreedList,
    fetchBreed,
    dogsImgList,
    isLoading,
    errorLoading,
    isLoadingBreed,
    errorLoadBreed,
    subBreeds,
    fetchSubBreed
  }) => {

  const {t} = useTranslation();
  const [breed, setBreed] = useState()

  const handleBreed = (breedId) => {
    fetchBreed(breedId);
    setBreed(breedId);
  };

  const handleSubBreed = (subBreed) => {
    fetchSubBreed(subBreed, breed);
  };

  useEffect(() => {
    fetchBreedList()
  }, [fetchBreedList])

  return (
    <Page
      title={t('COMMON.TITLE')}
    >
      <Container>
        {isLoading
        ?
        <Loader />
        :
        <Box className="contentBreedSelect">
          <InputSelect
            label={t('COMMON.SELECT_RAZA')}
            handleBreed={handleBreed}
            list={list}
          />
          {subBreeds.length > 0 &&
          <InputSelect
            label={t('COMMON.SELECT_SUBRAZA')}
            handleBreed={handleSubBreed}
            list={subBreeds}
          />}
          <BreedDog
            t={t}
            dogsImgList={dogsImgList}
            isLoadingBreed={isLoadingBreed}
            errorLoadBreed={errorLoadBreed}
            fetchBreed={fetchBreed}
          />
        </Box>
        }
        {errorLoading && 
        <ErrorRequest
          t={t}
          errorLoading={errorLoading}
          reload={fetchBreedList}
        />}
      </Container>
    </Page>
  );
}

BreedSelect.propTypes = {
  fetchBreedList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  fetchBreed: PropTypes.func.isRequired,
  dogsImgList: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorLoading: PropTypes.bool.isRequired,
  selectedBreed: PropTypes.string.isRequired,
  isLoadingBreed: PropTypes.bool.isRequired,
  errorLoadBreed: PropTypes.bool.isRequired,
  fetchSubBreed: PropTypes.func.isRequired
};
