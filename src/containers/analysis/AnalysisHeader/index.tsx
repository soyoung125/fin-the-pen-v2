import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Stack, TextField, Typography } from '@mui/material';
import { LocalizationProvider, StaticDatePicker } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import moment from 'moment';
import { useState } from 'react';
import SwitchingHeader from '../../../component/common/SwitchingHeader';

function AnalysisHeader() {
    const [date, setDate] = useState(moment()); // 전역 상태로 변경 예정
    const [openDatePickerModal, setOpenDatePickerModal] = useState(false);
    const [newDate, setNewDate] = useState(moment(date));
  
    const handleModalClose = () => {
      setOpenDatePickerModal(false);
      setDate(moment(newDate));
    };
  
    return (
      <Stack justifyContent="center">
        <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>카테고리별 소비 현황</Typography>
        <SwitchingHeader
          justifyContent="center"
          handleClickLeftArrow={() => setDate(moment(date).subtract(1, 'months'))}
          handleClickRightArrow={() => setDate(moment(date).add(1, 'months'))}
        >
          <Box
            sx={{ typography: 'caption', mx: 1 }}
            onClick={() => setOpenDatePickerModal(true)}
          >
            {`${moment(date).format('YYYY년 M월')}`}
          </Box>
        </SwitchingHeader>
  
        <Dialog
          open={openDatePickerModal}
          onClose={() => setOpenDatePickerModal(false)}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            '.MuiDialogContent-root': {
              padding: 0,
            },
            '& > div > div, & > div > div > div, & .MuiCalendarPicker-root': {
              width: '100%',
            },
            '.MuiPickerStaticWrapper-content': {
              minWidth: '100%',
            },
            '.MuiCalendarOrClockPicker-root > div': {
              width: '100%',
              margin: '0',
            },
            '.MuiMonthPicker-root': {
              margin: 0,
            }
          }}
        >
          <DialogTitle id="alert-dialog-title">
            날짜 선택
          </DialogTitle>
          <DialogContent>
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <StaticDatePicker
                views={['year', 'month']}
                openTo="year"
                displayStaticWrapperAs="desktop"
                value={newDate}
                onChange={(newValue) => {
                  newValue && setNewDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleModalClose} autoFocus>
              설정
            </Button>
          </DialogActions>
        </Dialog>
      </Stack>
    );
  }
  
  export default AnalysisHeader;
  