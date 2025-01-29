import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function Price() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={{ xs: '30vh', md: '30vh' }}
      px={{ xs: 2, sm: 4, md: 6 }}
    >
      <Card
        sx={{
          width: { xs: '90%', sm: '70%', md: '40%' },
          textAlign: 'center',
          boxShadow: 3,
          padding: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{ fontWeight: 'bold', color: '#1976d2' }}
          >
            Total Paisa this month:
          </Typography>
          <Typography
            variant="h2"
            sx={{ fontWeight: 'bold', marginTop: 2, color: '#ff5722' }}
          >
            $99.99
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Price;
