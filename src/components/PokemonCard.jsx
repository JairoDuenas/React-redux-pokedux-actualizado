import React, { useState } from 'react';
import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import Meta from 'antd/lib/card/Meta';
import '../styles/PokemonList.css'
import StarButton from './StarButton';

const PokemonCard = ({ name, image, types, id }) => {
  const dispatch = useDispatch();
  const [favoriteLocal, setFavoriteLocal] = useState(false);
  const typesString = types.map(elem => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite(id));
    setFavoriteLocal(!favoriteLocal);
  }

  return (
    <div>
      <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarButton isFavorite={favoriteLocal} onClick={handleOnFavorite} />}
      >
        <Meta description={typesString} />
      </Card>
    </div>
  );
}

export default PokemonCard;
