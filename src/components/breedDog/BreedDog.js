import PropTypes from 'prop-types';
import { ImgDog } from '../ImgDog/ImgDog';
import './BreedDog.scss';

export const BreedDog = (
  {
    dogsImgList,
  }) => {


  return (
    <div className="breedDog">
      {
        dogsImgList.length > 0 && (
          <div className="grid">
            { dogsImgList.map((img, index) =>
              <ImgDog key={index} img={img} />
            )}
          </div>
        )
      }
    </div>
  );
}

BreedDog.propTypes = {
  dogsImgList: PropTypes.array.isRequired,
};
