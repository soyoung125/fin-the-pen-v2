import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ScheduleDrawerHeader from "./ScheduleDrawerHeader.tsx";
import { Stack } from "@mui/material";

export interface ScheduleDrawerProps {
  setDrawerWidth: Dispatch<SetStateAction<number>>;
}

function ScheduleDrawer({ setDrawerWidth }: ScheduleDrawerProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 현재 버그 있음
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
    setDrawerWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div ref={ref}>
      <Stack justifyContent="space-between" spacing={2} m={1}>
        <ScheduleDrawerHeader />
      </Stack>
    </div>
  );
}

export default ScheduleDrawer;
