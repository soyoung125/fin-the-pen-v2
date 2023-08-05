import { Button, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { SCHEDULE_DRAWER } from "../../types/schedule.ts";
import { useSetRecoilState } from "recoil";
import { scheduleDrawerOpenAtom } from "../../app/recoil/scheduleDrawerOpenAtom.ts";

function ScheduleDrawerHeader() {
  const setBottomDrawerOpen = useSetRecoilState(scheduleDrawerOpenAtom);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {SCHEDULE_DRAWER.drawer_title["create"]}
      </Typography>
      <Button onClick={() => setBottomDrawerOpen(false)}>
        <ClearIcon />
      </Button>
    </Stack>
  );
}

export default ScheduleDrawerHeader;
