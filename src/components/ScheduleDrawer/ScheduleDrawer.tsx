import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import ScheduleDrawerHeader from "./ScheduleDrawerHeader.tsx";
import { Stack } from "@mui/material";
import NameInput from "./NameInput.tsx";
import DateInput from "./DateInput.tsx";
import RepeatInput from "./RepeatInput.tsx";
import { useScheduleDrawerForm } from "./useScheduleDrawerForm.ts";

export interface ScheduleDrawerProps {
  setDrawerWidth: Dispatch<SetStateAction<number>>;
}

function ScheduleDrawer({ setDrawerWidth }: ScheduleDrawerProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { form } = useScheduleDrawerForm();

  useEffect(() => {
    // 현재 버그 있음
    console.log("width", ref.current ? ref.current.offsetWidth : 0);
    setDrawerWidth(ref.current ? ref.current.offsetWidth : 0);
  }, [ref.current]);

  return (
    <div ref={ref}>
      <Stack justifyContent="space-between" spacing={2} m={1}>
        {/* 헤더 */}
        <ScheduleDrawerHeader />

        {/* 이벤트 제목 */}
        <NameInput value={form.name} />

        {/* 날짜 */}
        <DateInput />

        {/* 이벤트 반복 설정 */}
        <RepeatInput />
      </Stack>
    </div>
  );
}

export default ScheduleDrawer;