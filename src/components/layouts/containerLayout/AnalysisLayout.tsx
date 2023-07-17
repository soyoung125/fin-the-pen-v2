import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AnalysisHeader from '../../../containers/analysis/AnalysisHeader';

function AnalysisLayout() {  
    return (
        <Box sx={{ mt: 2 }}>
        <AnalysisHeader />

        <Box sx={{ my: 3, wordBreak: 'keep-all', fontWeight: 'bold' }}>
          <Outlet />
        </Box>
      </Box>
    );
  }
  
  export default AnalysisLayout;
  