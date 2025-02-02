import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useExpense } from './Expensecontext';

function Price() {
  const { items, totalExpense } = useExpense();

  return (
    <Box sx={{ maxWidth: 500, margin: 'auto', textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" mb={2}>Added Items</Typography>
      <List>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemText primary={item.name} secondary={`Price: ₹${item.price} - Category: ${item.category}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
      <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>
        Total Expense: ₹{totalExpense}
      </Typography>
    </Box>
  );
}

export default Price;
