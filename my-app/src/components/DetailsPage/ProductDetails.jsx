import React, { useState, useEffect } from 'react';
import { Box, Card, CardBody, Image, Stack, Heading, Text, Button, IconButton } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../Styles/ProductDetails.css';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  const handleEditButtonClick = () => {
    navigate(`/edit/${id}`);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };

    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/v1/products/${id}/`, { headers });
        setProduct(response.data);
      } catch (error) {
        alert('Error fetching product details:', error);
      }
    };
    
    fetchProductDetails();
  }, [id]);
  
  return (
    <Box className='details-box'>
      <Stack direction="row" justify="space-between" align="center">
        <Text className='product-details-title'>Products Details</Text>
      </Stack>
      <Card className='details-card'>
        <Stack direction="row" align="center" justify="flex-end" marginRight={3}>
          <IconButton
            icon={<EditIcon />}
            aria-label="Edit Product"
            variant="unstyled"
            onClick={handleEditButtonClick}
          />
          <Text marginLeft={-3}>Edit</Text>
        </Stack>
        <CardBody p={0} display='flex' flexDirection={{ base: 'column', md: 'row' }}>
          <Box flex="1">
            <Image
              src={product?.image}
              alt={product?.name}
            />
          </Box>
          <Stack flex="1" p={7} spacing={4} align="flex-start" justifyContent="flex-start">
            <Heading className="details-color details-font-title">{product?.name}</Heading>
            <Text className="details-color">{product?.description}</Text>
            <Text className="details-color details-font">Price ${product?.price}</Text>
            <Button
              onClick={handleEditButtonClick}
              className='cta-button'
            >
              CTA
            </Button>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default ProductDetails;