import React from 'react';
import { Card, CardBody, CardFooter, Button, Image, Stack, Heading, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ id, image, name, price }) => {
  const navigate = useNavigate();

  const handlePriceButtonClick = () => {
    navigate(`/products/${id}`);
  };

  return (
    <Card className='product-card'>
      <CardBody style={{ position: 'relative' }}>
        <Image
          src={image}
          alt={name}
          objectFit='cover'
        />
         <Heading className="product-name">{name}</Heading>
          <Button onClick={handlePriceButtonClick} className="price-button">${price}</Button>
      </CardBody>
    </Card>
  );
};

export default ProductCard;