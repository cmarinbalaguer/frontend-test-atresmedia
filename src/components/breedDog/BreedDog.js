import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { ImgDog } from '../ImgDog/ImgDog';

import { Box, Container } from '@material-ui/core';
import Pagination from "@material-ui/lab/Pagination";
import './BreedDog.scss';
import { Loader } from '../common/loader/Loader';
import { ErrorRequest } from '../common/errorRequest/ErrorRequest';

export const BreedDog = (
  {
    dogsImgList,
    isLoadingBreed,
    errorLoadBreed,
    fetchBreed,
    t
  }) => {

  const [imgList, setImgLis] = useState(dogsImgList);
  const itemsPerPage = 9;
  const [page, setPage] = useState(1);
  const [numberPage, setNumberPage] = useState(0);

  const handleChange = (e, value) => {
    setPage(value);
  };

  useEffect(() => {
    setImgLis(dogsImgList);
  }, [dogsImgList]);

  useEffect(() => {
    setNumberPage(Math.ceil(imgList.length / itemsPerPage));
  }, [imgList]);

  return (
    <Container>
      {isLoadingBreed
        ?
        <Loader />
        :
        <div className="breedDog">
          {
            dogsImgList.length > 0 && (
              <Box component="span">
                <div className="grid">
                  { dogsImgList
                  .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                  .map((img, index) =>
                    <ImgDog key={index} img={img} />
                  )}
                </div>
                <Pagination
                  className="pagination"
                  count={numberPage}
                  page={page}
                  onChange={handleChange}
                  defaultPage={1}
                  color="primary"
                  size="large"
                  showFirstButton
                  showLastButton
                />
              </Box>
            )
          }
          {errorLoadBreed && 
          <ErrorRequest
            t={t}
            errorLoading={errorLoadBreed}
            reload={fetchBreed}
          />}
        </div>
      }
    </Container>
  );
}

BreedDog.defaultProps = {
  fetchBreed: () => {}
}

BreedDog.propTypes = {
  dogsImgList: PropTypes.array.isRequired,
  fetchBreed: PropTypes.func,
  t: PropTypes.func,
  isLoadingBreed: PropTypes.bool.isRequired,
  errorLoadBreed: PropTypes.bool.isRequired
};
