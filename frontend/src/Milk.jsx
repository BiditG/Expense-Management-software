import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, IconButton, Modal, Button } from '@mui/material';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

function Milk() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <IconButton onClick={handleOpen} sx={{ fontSize: 50, color: '#1976d2' }}>
          <LocalDrinkIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 300,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            textAlign: 'center'
          }}
        >
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Add Milk</Typography>
          <Button variant="contained" color="primary" onClick={handleClose}>
            Add Milk
          </Button>
        </Box>
      </Modal>
    </>
  );
}

export default Milk;
