import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import LoginPage from "./components/LoginPage/LoginPage"
import Products from './components/ListingPage/Products';
import ProductDetails from './components/DetailsPage/ProductDetails';
import EditProduct from './components/EditDetailsPage/EditProduct';


const App = () => {
    return (
        <ChakraProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/products" element={<Products />} />
                        <Route path="/products/:id" element={<ProductDetails />} />
                        <Route path="/edit/:id" element={<EditProduct />} />

                    </Routes>
                </div>
            </Router>
        </ChakraProvider>
    );
};

export default App;