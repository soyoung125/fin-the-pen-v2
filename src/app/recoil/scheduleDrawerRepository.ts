import { selector } from "recoil";
import { scheduleDrawerOpenState } from "./scheduleDrawerAtom.ts";

export const scheduleDrawerOpenRepository = selector({
  key: "scheduleDrawerOpenRepository",
  get: ({ getCallback }) => {
    const openScheduleDrawer = getCallback(({ set }) => () => {
      set(scheduleDrawerOpenState, true);
    });

    const closeScheduleDrawer = getCallback(({ set }) => () => {
      set(scheduleDrawerOpenState, false);
    });

    return {
      openScheduleDrawer,
      closeScheduleDrawer,
    };
  },
});
