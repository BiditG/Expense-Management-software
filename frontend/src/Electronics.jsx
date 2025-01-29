import React, { useState } from 'react';
import { Box, Typography, IconButton, Modal, Button } from '@mui/material';
import DevicesIcon from '@mui/icons-material/Devices';

export default function Electronics() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <IconButton onClick={() => setOpen(true)} sx={{ fontSize: 50, color: '#1976d2' }}>
          <DevicesIcon fontSize="inherit" />
        </IconButton>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 300, bgcolor: 'background.paper', boxShadow: 24, p: 4, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>Add Electronics</Typography>
          <Button variant="contained" color="primary" onClick={() => setOpen(false)}>Add Electronics</Button>
        </Box>
      </Modal>
    </>
  );
}

