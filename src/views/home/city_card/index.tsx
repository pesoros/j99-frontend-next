'use client';

import { ReactNode, SyntheticEvent, useState } from 'react';
import Box from '@mui/material/Box/Box';
import Tab from '@mui/material/Tab/Tab';
import Tabs from '@mui/material/Tabs/Tabs';
import TripForm from './components/trip_form';
import CheckTicket from './components/check_ticket';
import Pariwisata from './components/pariwisata';
import CheckPackage from './components/check_package';

interface TabPanelProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const CityCard = () => {
  const [value, setValue] = useState<number>(0);

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-[600px] h-80 bg-white rounded-lg">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Beli Tiket" {...a11yProps(0)} />
            <Tab label="Cek Tiket" {...a11yProps(1)} />
            <Tab label="Pariwisata" {...a11yProps(2)} />
            <Tab label="Cek Paket" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TripForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <CheckTicket />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Pariwisata />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <CheckPackage />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default CityCard;
