import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { Form } from 'react-bootstrap';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signUpUser } from '../redux/CurrentUser/CurrentUserSlice';

const theme = createTheme();
const Signup = () => {
  const currentUser = useSelector((state) => state.userReducer);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.email) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Welcome, you are signed up and logged in!',
        showConfirmButton: false,
        timer: 2000,
      });
      navigate('/app/investigators');
    }
  }, [currentUser, navigate]);
  const handleSignup = (e) => {
    e.preventDefault();
    const [name, email, password, passwordConf] = document.getElementById('form').elements;
    if (password.value !== passwordConf.value) {
      passwordConf.setCustomValidity("Passwords Don't Match");
    } else {
      passwordConf.setCustomValidity('');
    }
    dispatch(signUpUser({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: passwordConf,
    }));
    setValidated(true);
  };
  return (
    <div
      className=""
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/emmii/image/upload/v1740429698/private-investigators/download_rslxmg.jpg")',
        height: '100vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: '5rem',
            }}
          >
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Form validated={validated} id="form" onSubmit={handleSignup}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" name="name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" name="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>
                  Password (at least 8 characters & 1 Capital, 1 symbol, and 1 number)
                </Form.Label>
                <Form.Control required type="password" name="password" pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type="password" name="passwordConf" />
              </Form.Group>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: '#97BF0F' }}
              >
                Sign Up
              </Button>
            </Form>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};
export default Signup;
