import { Box, Paper, Stack } from '@mui/material';
import { useState } from 'react';
import PATH from '../../../../domain/constants/path';
import { useNavigate } from 'react-router-dom';
import HomeMode from './headerMode/HomeMode';
import AnalysisMode from './headerMode/AnalysisMode';
import PopupButton from './buttons/PopupButton';

function TopBar() {
    const navigate = useNavigate();
    // const user = useAppSelector(selectUser);
    // const headerOpen = useAppSelector(selectHeaderOpen);
    // const headerMode = useAppSelector(selectHeaderMode);
    // const popupSetting = useAppSelector(selectSavingPopUpSetting);

    // useEffect(() => {
    //     // 옵셔널 체이닝 사용하면 eslint에서 오류 발생
    //     if (user && user.name === 'guest by msw') {
    //         console.warn('게스트 모드로 동작합니다. 게스트 모드에서는 데이터가 저장되지 않습니다.');
    //         dispatch(setGuestModeTrue());
    //     } else {
    //         dispatch(setGuestModeFalse());
    //     }
    // }, [user]);

    const handleClickPopup = () => {
        if (popupSetting.settings.connect === '적금 계좌 APP') {
            console.log('계좌 열기');
        } else {
            navigate(PATH.savingsGoal)
        }
    }

    const [headerOpen, setHeaderOpen] = useState(true);
    const [headerMode, setHeaderMode] = useState('home');
    const [popupSetting, setPopupSetting] = useState({
        isOn: true,
        settings: {
            display: 'none(아이콘)', // none(아이콘) || 저축금액(퍼센트)
            connect: '저축 목표 설정 페이지', // 저축목표설정페이지 || 계좌 앱
        }
    });

    return (
        <Box sx={{ position: 'relative', zIndex: 1000 }}>
            {
                headerOpen
                && (
                    <Paper
                        // elevation={10} // shadow 해제함
                        sx={{
                            backgroundColor: 'primary.main',
                            height: 100,
                            borderRadius: 0,
                        }}
                    >
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="flex-end"
                            sx={{ height: 100 }}
                        >
                            {headerMode === 'home' && (<HomeMode />)}
                            {headerMode === 'analysis' && (<AnalysisMode />)}
                        </Stack>
                        {popupSetting.isOn &&
                            <PopupButton handleClickPopup={handleClickPopup} />
                        }
                    </Paper>
                )
            }
        </Box>

    );
}
export default TopBar;
  /**
 * 상단 바
 */
