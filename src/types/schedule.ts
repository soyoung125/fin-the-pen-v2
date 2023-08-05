export type ScheduleDrawerModeValue =
  ScheduleDrawerMode[keyof ScheduleDrawerMode];

export interface ScheduleDrawerMode {
  modify: "modify";
  create: "create";
}

export const SCHEDULE_DRAWER_MODE: Readonly<ScheduleDrawerMode> = {
  modify: "modify",
  create: "create",
};

export const SCHEDULE_DRAWER: Readonly<ScheduleDrawer> = Object.freeze({
  drawer_title: {
    create: "새로운 이벤트",
    read: "일정",
    modify: "일정 편집",
  },
  name: "제목",
  date: "날짜",
  start_time: "시작",
  end_time: "종료",
  repeat: "반복",
  repeating_cycle: "반복 주기",
  repeat_deadline: "반복 종료 기한",
  category_title: "일정 카테고리",
  add_category: "+ 카테고리 추가",
  set_finance_title: "자산 설정하기",
  set_spending_title: "금액 설정",
  type_plus: "+",
  type_minus: "-",
  won: "원",
  expected_spending: "예상 비용",
  set_importance_title: "일정 중요도",
  importance_high: "상",
  importance_middle: "중",
  importance_low: "하",
  exclusion_title: "예산에서 제외",
  add_schedule: {
    create: "일정 추가하기",
    read: "문구를 뭐로할까요",
    modify: "수정 완료",
  },
});

export interface ScheduleDrawer {
  readonly drawer_title: {
    readonly create: string;
    readonly read: string;
    readonly modify: string;
  };
  readonly name: string;
  readonly date: string;
  readonly start_time: string;
  readonly end_time: string;
  readonly repeat: string;
  readonly repeating_cycle: string;
  readonly repeat_deadline: string;
  readonly category_title: string;
  readonly add_category: string;
  readonly set_finance_title: string;
  readonly set_spending_title: string;
  readonly type_plus: "+"; // 저장 데이터와 연동되어 있음
  readonly type_minus: "-"; // 저장 데이터와 연동되어 있음
  readonly won: string;
  readonly expected_spending: string;
  readonly set_importance_title: string;
  readonly importance_high: "상"; // 저장 데이터와 연동되어 있음
  readonly importance_middle: "중"; // 저장 데이터와 연동되어 있음
  readonly importance_low: "하"; // 저장 데이터와 연동되어 있음
  readonly exclusion_title: string;
  readonly add_schedule: {
    readonly create: string;
    readonly read: string;
    readonly modify: string;
  };
}
