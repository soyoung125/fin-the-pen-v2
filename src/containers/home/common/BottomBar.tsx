import {
  BottomNavigation,
  BottomNavigationAction,
  Drawer,
  Paper,
} from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DataSaverOffIcon from "@mui/icons-material/DataSaverOff";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PaidIcon from "@mui/icons-material/Paid";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PATH from "../../../domain/constants/path";
import { useRecoilValue } from "recoil";
import ScheduleDrawer from "../../../components/ScheduleDrawer";
import { scheduleDrawerOpenRepository } from "../../../app/recoil/scheduleDrawerRepository.ts";
import { scheduleDrawerOpenState } from "../../../app/recoil/scheduleDrawerAtom.ts";

function BottomBar() {
  const navigate = useNavigate();

  const [drawerWidth, setDrawerWidth] = useState(0);
  const [startTime, setStartTime] = useState("09");

  // 전역 상태로 관리할 변수들
  const [date, setDate] = useState(moment());
  const isScheduleDrawerOpen = useRecoilValue(scheduleDrawerOpenState);
  const { openScheduleDrawer, closeScheduleDrawer } = useRecoilValue(
    scheduleDrawerOpenRepository
  );
  const [bottomDrawerTabMenu, setBottomDrawerTabMenu] = useState(0);

  useEffect(() => {
    if (moment().isSame(date, "day")) {
      setStartTime(moment().add(1, "hours").format("HH"));
    } else {
      setStartTime(moment("09:00", "HH:mm").format("HH"));
    }
  }, [date]);

  return (
    <>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 1,
          zIndex: 1000,
        }}
        elevation={3}
      >
        <BottomNavigation
          value={bottomDrawerTabMenu}
          onChange={(event, newValue) => {
            // setBottomDrawerTabMenu(newValue);
          }}
        >
          <BottomNavigationAction
            label="홈"
            icon={<CalendarMonthIcon />}
            onClick={() => {
              // dispatch(changeViewMode('schedule'));
              navigate(PATH.home);
            }}
          />
          <BottomNavigationAction
            label="리포트"
            icon={<DataSaverOffIcon />}
            onClick={() => navigate(PATH.analysis)}
          />
          <BottomNavigationAction
            label=""
            icon={<AddCircleIcon />}
            onClick={() => openScheduleDrawer()}
          />
          <BottomNavigationAction
            label="자산관리"
            icon={<PaidIcon />}
            onClick={() => navigate(PATH.assetManagement)}
          />
          <BottomNavigationAction
            label="설정"
            icon={<SettingsIcon />}
            onClick={() => navigate(PATH.settings)}
          />
        </BottomNavigation>
      </Paper>
      <Drawer
        open={isScheduleDrawerOpen}
        anchor="bottom"
        onClose={() => closeScheduleDrawer()}
        // Drawer를 가운데로 위치할 수 있도록 도와줌. resize는 이후 업데이트 예정
        PaperProps={{
          sx: {
            maxWidth: "400px",
            marginX:
              drawerWidth === 400 ? `calc((100% - ${drawerWidth}px)/2)` : null,
          },
        }}
      >
        {/* 이 부분을 범용적으로 사용할 수 있게 만드는 건 어떨까? */}
        <ScheduleDrawer setDrawerWidth={setDrawerWidth} />
      </Drawer>
    </>
  );
}

export default BottomBar;
/**
 * 하단 바
 */
