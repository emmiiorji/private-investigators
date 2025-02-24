import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Form } from 'react-bootstrap';
import { getUser } from '../redux/CurrentUser/CurrentUserSlice';

const Login = () => {
  const currentUser = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser.email) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'You are logged in!',
        showConfirmButton: false,
        timer: 2000,
      });
      navigate('/app/investigators');
    } else if (currentUser.error) {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Invalid email or password',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, [currentUser, navigate]);
  const handleLogin = (e) => {
    e.preventDefault();
    const [email, password] = document.getElementById('form').elements;
    dispatch(getUser({ email: email.value, password: password.value }));
  };
  const theme = createTheme();
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
              Login
            </Typography>
            <form id="form" onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" name="email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control required type="password" name="password" />
              </Form.Group>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: '#97BF0F' }}
              >
                Login
              </Button>
            </form>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};
export default Login;
