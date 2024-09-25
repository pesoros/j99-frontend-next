'use client';

import TextField from '@mui/material/TextField/TextField';

const TripForm = () => {
  return (
    <div className="grid grid-cols-1 gap-8 justify-between">
      <div className="w-full flex flex-row gap-8">
        <TextField
          id="departure"
          label="Dari Kota"
          placeholder="Masukkan nama daerah atau kota"
          variant="standard"
          className="w-full"
        />
        <TextField
          id="arrival"
          label="Tujuan"
          placeholder="Masukkan nama daerah atau kota"
          variant="standard"
          className="w-full"
        />
      </div>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        className="w-full"
      />
    </div>
  );
};

export default TripForm;
