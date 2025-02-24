import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Welcome = () => (
  <div
    className=""
    style={{
      backgroundImage: 'url("https://res.cloudinary.com/emmii/image/upload/v1740429698/private-investigators/download_rslxmg.jpg")',
      height: '100vh',
      width: '100%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Private Investigators
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom className="">
          Private Investigators is the perfect tool for anyone in need of investigative services.
          Try it out today and experience the power of our cutting-edge React app.
        </Typography>
        <div className="text-center mt-5">
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="success" className="m-2" style={{ backgroundColor: '#97BF0F', textDecoration: 'none' }}>
              Register
            </Button>
          </Link>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" className="m-2 px-4" style={{ backgroundColor: '#97BF0F' }}>
              Login
            </Button>
          </Link>
        </div>
      </Container>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
        className="text-center"
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            <small>
              &copy; 2023 Mátyás, Waris, Chris,
              Felipe and Emmanuel
            </small>
          </Typography>
        </Container>
      </Box>
    </Box>
  </div>
);
export default Welcome;
