import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChakraProvider, Grid, Box, Text } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import '../../Styles/ProductCard.css';


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          throw new Error('Access token not found');
        }

        const response = await axios.get('http://127.0.0.1:8000/api/v1/products', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        setProducts(response.data);
      }  catch (error) {
        if (error.response) {
            const status = error.response.status;
            switch (status) {
                case 401:
                    alert('Unauthorized: Access token invalid or expired');
                    break;
                case 404:
                    alert('Resource not found');
                    break;
                default:
                    alert(`HTTP error ${status}: ${error.response.statusText}`);
                    break;
            }
        } else if (error.request) {
            alert('No response received from the server');
        } else {
            alert('An error occurred while making the request: ' + error.message);
        }
    }
    };
    fetchProducts();
  }, []);

  return (
    <ChakraProvider>
      <Box className='products-box'> 
        <Text className='title'>Products Page</Text>
        <Grid className="grid-container" gap={6}>
          {products.map(product => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Products;