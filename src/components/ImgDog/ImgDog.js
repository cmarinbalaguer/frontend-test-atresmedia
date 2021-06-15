import PropTypes from 'prop-types';
import { useState } from "react";
import './ImgDog.scss';

export const ImgDog = ({img}) => {

  const [isSelected, setSelected] = useState(false);
  const [hasLoaded, setLoaded] = useState(false);

  const handleClick = () => {
    if (hasLoaded) {
      setSelected(!isSelected);
    }
  };
  const handleLoad = () => setLoaded(true);

  return (
    <>
      <img
        className={`breedDog ${isSelected ? 'selected' : ''} ${hasLoaded ? 'loaded' : ''}`}
        src={img}
        loading="lazy"
        onLoad={handleLoad}
        onClick={handleClick}
        alt="dog-img"
      />
      {isSelected && (
        <span className="textClose">Haga click para cerrar la imagen y volver al listado.</span>
      )}
      </>
  );
}

ImgDog.propTypes = {
  img: PropTypes.string.isRequired
};
