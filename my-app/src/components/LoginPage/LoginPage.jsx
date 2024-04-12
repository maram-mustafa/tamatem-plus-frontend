import { ChakraProvider } from '@chakra-ui/react';
import { Box, Input, Button, Link, Flex, Text } from "@chakra-ui/react";
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import '../../Styles/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logoSvg from '../../images/logo.svg';


const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleTogglePassword = () => {
    setShowPassword(!showPassword);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async () => {
        try {
            const initialLoginResponse = await axios.post('http://127.0.0.1:8000/api/v1/users/', {
                email: email,
                password: password
            });
            
            if (initialLoginResponse.status === 201) {
                const tokenResponse = await axios.post('http://127.0.0.1:8000/api/token/', {
                    email: email,
                    password: password
                });

                const { access, refresh } = tokenResponse.data;
                localStorage.setItem('accessToken', access);
                localStorage.setItem('refreshToken', refresh);

                navigate('/products');
            } else {
                throw new Error('Failed to log in. Please check your credentials.');
            }
        } catch (error) {
            alert('An error occurred while logging in. Please try again later.');
        }
    };

    return (
        <ChakraProvider>
            <Flex direction="column" alignItems="center" justifyContent="center" height="100vh">
                <Flex className="logo-container" alignItems="center">
                <img src={logoSvg} alt="Tamatem Plus" className="tamatem-logo" />
                </Flex>
                <Box className="login-container">
                    <Text className="login-title">
                        Login
                    </Text>
                    <Flex direction="column">
                        <div className="email-input-container">
                        <Input
                         placeholder="Email"
                         value={email}
                         onChange={handleEmailChange} 
                         />
                        </div>
                        <div className="password-input-container">
                        <Input
                            className="password-input"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        <Button
                            className="show-password-button"
                            onClick={handleTogglePassword}
                        >
                            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                        </Button>
                    </div>
                        <Flex  className="forgot-password-link"> 
                            <Link href="#">
                                Forgot your Password?
                            </Link>
                        </Flex>
                        <div className="login-button-div">
                        <Button onClick={handleLogin}>
                            Login
                        </Button>
                        </div>
                    </Flex>
                </Box>
            </Flex>
        </ChakraProvider>
    );
};

export default LoginPage;