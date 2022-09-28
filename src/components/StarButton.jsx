import React from 'react';
import { Button } from 'antd';
import { StarFilled, StarOutlined } from '@ant-design/icons';

const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined
  return (
    <div>
      <Button icon={<Icon/>} onClick={onClick} />
    </div>
  );
}

export default StarButton;
