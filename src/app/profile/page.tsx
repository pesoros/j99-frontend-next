import { useProfile } from '@/views/hooks/profile/useProfile';
import { Button, TextField } from '@mui/material';

export default function Profile() {
  const { getUserData } = useProfile();

  const userData = getUserData();

  return (
    <div className="w-full flex justify-center bg-yellow-400">
      <Button variant="contained">Contained</Button>
      <Button variant="contained" disabled>
        {userData.email}
      </Button>
      <Button variant="contained" href="#contained-buttons">
        Link
      </Button>
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  );
}
