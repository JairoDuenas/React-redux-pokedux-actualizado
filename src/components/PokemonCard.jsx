import React from 'react';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import '../styles/PokemonList.css'
import { StarOutlined } from '@ant-design/icons';

const PokemonCard = ({ name, image, types }) => {
  const typesString = types.map(elem => elem.type.name).join(', ')
  return (
    <div>
      <Card
        title={name}
        cover={<img src={image} alt={name} />}
        extra={<StarOutlined/>}
      >
        <Meta description={typesString} />
      </Card>
    </div>
  );
}

export default PokemonCard;
