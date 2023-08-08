import { useState } from "react";
import { ScheduleDrawer } from "../../types/schedule.ts";

export const useScheduleDrawerForm = () => {
  const [form, setForm] = useState<ScheduleDrawer>({
    add_category: "",
    add_schedule: { create: "", modify: "", read: "" },
    category_title: "",
    date: "",
    drawer_title: { create: "", modify: "", read: "" },
    end_time: "",
    exclusion_title: "",
    expected_spending: "",
    importance_high: "상",
    importance_low: "하",
    importance_middle: "중",
    name: "asdfafd",
    repeat: "",
    repeat_deadline: "",
    repeating_cycle: "",
    set_finance_title: "",
    set_importance_title: "",
    set_spending_title: "",
    start_time: "",
    type_minus: "-",
    type_plus: "+",
    won: "",
  });

  return { form };
};
