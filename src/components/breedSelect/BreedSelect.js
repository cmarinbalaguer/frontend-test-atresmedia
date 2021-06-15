import PropTypes from 'prop-types';
import { useEffect } from "react";
import { BreedDog } from '../breedDog/BreedDog';

import { Box, Container } from '@material-ui/core';
import { Page } from '../page/Page';
import { Loader } from '../common/loader/Loader';
import { ErrorRequest } from '../common/errorRequest/ErrorRequest';

import './BreedSelect.scss'


export const BreedSelect = (
  {
    list,
    fetchBreedList,
    fetchBreed,
    dogsImgList,
    isLoading,
    errorLoading,
    isLoadingBreed,
    errorLoadBreed
    //selectedBreed
  }) => {

  const handleBreed = (breedId) => {
    fetchBreed(breedId)
  };

  useEffect(() => {
    fetchBreedList()
  }, [fetchBreedList])

  return (
    <Page
      title="Dog breeds images"
    >
      <Container>
        {isLoading
        ?
        <Loader />
        :
        <Box className="contentBreedSelect">
          <select
            onChange={(e) => handleBreed(e.currentTarget.value)}
          >
            <option value="">Seleccione Raza</option>
            {list.map((breed, i) => (
              <option key={i} value={breed}>
                {breed}
              </option>
            ))}
          </select>
          <BreedDog 
            dogsImgList={dogsImgList}
            isLoadingBreed={isLoadingBreed}
            errorLoadBreed={errorLoadBreed}
            fetchBreed={fetchBreed}
          />
        </Box>
        }
        {errorLoading && 
        <ErrorRequest 
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
  errorLoadBreed: PropTypes.bool.isRequired
};
