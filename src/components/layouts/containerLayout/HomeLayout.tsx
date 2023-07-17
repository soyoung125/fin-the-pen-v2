import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useRef } from "react";
import { Outlet } from 'react-router-dom';
import BottomBar from '../../../containers/home/common/BottomBar';
import TopBar from '../../../containers/home/common/TopBar';

export default function HomeLayout() {
    const ref = useRef(null);
  
    return (
      <Box sx={{ pb: 7 }} ref={ref}>
        <CssBaseline />
        <TopBar />
        <Box>
          <Outlet />
        </Box>
        <BottomBar />
      </Box>
    );
  }
  