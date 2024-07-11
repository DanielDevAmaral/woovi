import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';


const currencies = [
    {
      month: '1',
      value: 'R$ 30.500,00',
      cashback: true
    },
    {
      month: '2',
      value: 'R$ 15.300,00',
      cashback: false
    },
    {
      month: '3',
      value: 'R$ 10.196,66',
      cashback: false
    },
    {
      month: '4',
      value: 'R$ 7.725,00',
      cashback: false
    },
    {
      month: '5',
      value: 'R$ 6.300,00',
      cashback: false
    },
    {
      month: '6',
      value: 'R$ 5.283,33',
      cashback: false
    },
    {
      month: '7',
      value: 'R$ 4.542,85',
      cashback: false
    },
  ];

export default function Casdastro() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          fullWidth 
          id="outlined-name-input"
          label="Nome completo"
          type="password"
        />
        <TextField
          fullWidth
          id="outlined-cpf-input"
          label="CPF"
          type="string"
        />
        <TextField
          fullWidth
          id="outlined-card-input"
          label="Número do cartão"
          type="string"
        />
        <TextField
          id="outlined-dateV-input"
          label="Vencimento"
          type="string"
        />
        <TextField
          id="outlined-cvv-input"
          label="CVV"
          type="string"
        />
        <TextField
          fullWidth
          id="outlined-select-value"
          select
          label="Select"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}