import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from './Navbar';
import Price from './Price';
import Milk from './Milk';
import Food from './Food';
import Heavy from './Heavy';
import Toothpaste from './Toothpaste';

function Dashboard() {
  return (
    <>
      <Navbar />
      <Price />
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" gap={4} flexWrap="wrap">
          <Milk />
          <Food />
          <Heavy />
          <Toothpaste />
        </Box>
      </Container>
    </>
  );
}

export default Dashboard;
