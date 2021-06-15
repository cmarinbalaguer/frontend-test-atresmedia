import PropTypes from 'prop-types';
import { useEffect } from "react";
import { BreedDog } from '../breedDog/BreedDog';

export const BreedSelect = (
  {
    list,
    fetchBreedList,
    fetchBreed,
    dogsImgList
  }) => {

  const handleBreed = (breedId) => {
    fetchBreed(breedId)
  };

  useEffect(() => {
    fetchBreedList()
  }, [fetchBreedList])

  return (
    <>
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
      />
    </>
  );
}

BreedSelect.propTypes = {
  fetchBreedList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  fetchBreed: PropTypes.func.isRequired,
  dogsImgList: PropTypes.array.isRequired
};
