import React, { useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';
import { useExpense } from './Expensecontext';

function AddItem() {
  const { addItem } = useExpense();
  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');

  const categories = ['Food', 'Heavy', 'Accessories', 'Utensils', 'Temple'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !price || !category) return;

    addItem({ name: itemName, price: parseFloat(price), category });
    setItemName('');
    setPrice('');
    setCategory('');
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', textAlign: 'center', mt: 4 }}>
      <Typography variant="h5" mb={2}>Add an Item</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Item Name"
          fullWidth
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          label="Price"
          type="number"
          fullWidth
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          sx={{ mb: 2 }}
        />
        <TextField
          select
          label="Category"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ mb: 2 }}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Add Item
        </Button>
      </form>
    </Box>
  );
}

export default AddItem;
