import React, { useState, useEffect } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Stack, Card, Flex, Text, Spinner  } from "@chakra-ui/react";
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import '../../Styles/EditProduct.css';
import { useNavigate } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);
    const [imageFile, setImageFile] = useState(null);


    useEffect(() => {
        const fetchProductDetails = async () => {
            setLoading(true);
            try {
                const accessToken = localStorage.getItem('accessToken');
                const headers = {
                    Authorization: `Bearer ${accessToken}`
                };
                const response = await axios.get(`http://127.0.0.1:8000/api/v1/products/${id}/`, { headers });
                setName(response.data.name);
                setDescription(response.data.description);
                setImage(response.data.image);
                setPrice(response.data.price);
            } catch (error) {
                console.error('Error fetching product details:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchProductDetails();
    }, [id]);

    
    const handleCancelButton = () => {
        navigate(`/products`);
    };

    const handleSaveButton = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const headers = {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'multipart/form-data'
            };

            const formData = new FormData();
            formData.append('name', name);
            formData.append('description', description);
            formData.append('price', price);
            formData.append('image', imageFile);
            
            await axios.patch(`http://127.0.0.1:8000/api/v1/products/${id}/`, formData, { headers });

            alert("Changes saved successfully!");
            navigate(`/products`);
        } catch (error) {
            alert('Error saving changes:', error);
        }
    };


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };


    return (
        <Box className='edit-details-box'>
            <Stack direction="row" justify="space-between" align="center">
                <Text className='edit-title'>Edit</Text>
            </Stack>
            <Card className='edit-card'>
                {loading ? ( 
                    <Spinner size="lg" />
                ) : (
                    <div>
                        <FormControl mt="4" className='image-input-container'>
                            <FormLabel className='form-label-color'>Upload Image</FormLabel>
                            <div className="image-input">
                                <Input 
                                    type="file" 
                                    id="fileInput" 
                                    style={{ display: 'none' }} 
                                    onChange={handleImageChange}
                                    />
                                {image && (
                                    <div className="image-preview">
                                        <img src={image} alt="Product Image" className='image-preview' />
                                    </div>
                                )}
                                <Button className='select-image-button' onClick={() => document.getElementById('fileInput').click()}>SELECT FILE TO UPLOAD</Button>
                            </div>
                        </FormControl>
                        <FormControl mt="4">
                            <FormLabel className='form-label-color'>Product Name</FormLabel>
                            <Input value={name} placeholder="Enter Name" className='edit-input' onChange={(e) => setName(e.target.value)}/>
                        </FormControl>
                        <FormControl mt="4">
                            <FormLabel className='form-label-color'>Product Description</FormLabel>
                            <Input value={description} placeholder="Enter Description" className='edit-input' onChange={(e) => setDescription(e.target.value)}/>
                        </FormControl>
                        <FormControl mt="4">
                            <FormLabel className='form-label-color'>Product Price</FormLabel>
                            <Input value={price} placeholder="Enter Price" className='edit-input' onChange={(e) => setPrice(e.target.value)}/>
                        </FormControl>
                    </div>
                )}
                <Flex justify="flex-end" mr="1%" mt='4%'>
               <Button className='cancle-changes-button' onClick={handleCancelButton}>
                       Cancel
                   </Button>
                     <Button className='save-changes-button'  onClick={handleSaveButton}>
                        Save Changes
                     </Button>
                </Flex>
            </Card>
        </Box>
    );
};

export default EditProduct;