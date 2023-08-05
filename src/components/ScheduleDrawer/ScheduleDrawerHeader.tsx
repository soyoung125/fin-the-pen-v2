import { Button, Stack, Typography } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { SCHEDULE_DRAWER } from "../../types/schedule.ts";
import { useRecoilValue } from "recoil";
import { scheduleDrawerOpenRepository } from "../../app/recoil/scheduleDrawerRepository.ts";

function ScheduleDrawerHeader() {
  const { closeScheduleDrawer } = useRecoilValue(scheduleDrawerOpenRepository);

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {SCHEDULE_DRAWER.drawer_title["create"]}
      </Typography>
      <Button onClick={() => closeScheduleDrawer()}>
        <ClearIcon />
      </Button>
    </Stack>
  );
}

export default ScheduleDrawerHeader;
