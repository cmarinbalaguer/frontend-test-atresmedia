import PropTypes from 'prop-types';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import './ImgDog.scss';

export const ImgDog = ({img}) => {

  const [isSelected, setSelected] = useState(false);
  const [hasLoaded, setLoaded] = useState(false);
  const history = useHistory();

  const handleClick = () => {
    history.push({ pathname: '/DogDetail', state: { img }})
    if (hasLoaded) {
      setSelected(!isSelected);
    }
  };
  const handleLoad = () => setLoaded(true);

  return (
    <img
      className={`breedDog ${isSelected ? 'selected' : ''} ${hasLoaded ? 'loaded' : ''}`}
      src={img}
      loading="lazy"
      onLoad={handleLoad}
      onClick={handleClick}
      alt="dog-img"
    />
  );
}

ImgDog.propTypes = {
  img: PropTypes.string.isRequired
};
