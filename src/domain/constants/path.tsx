interface Path {
    readonly home: string;
    readonly signIn: string;
    readonly signUp: string;
    readonly myPage: string;
    readonly notification: string;
    readonly assetManagement: string;
    readonly settings: string;
    // readonly test: string;
    readonly analysis: string;
    readonly analysisDetail: string;
    readonly savingsGoal: string;
    readonly savingsDetailSettings: string;
    readonly regularTransactionAmount: string;
    readonly DetailSettings: string;
    readonly DetailedHistory: string;
    readonly assetByCategory: string;
    readonly scheduleManagement: string;
  }
  
  const PATH: Readonly<Path> = Object.freeze({
    home: '/',
    signIn: '/sign-in',
    signUp: '/sign-up',
    myPage: '/myPage',
    notification: '/notification',
    assetManagement: '/asset-management',
    settings: '/settings',
    // test: '/test',
  
    analysis: '/analysis',
    analysisDetail: '/analysis/detail',
  
    // 자산관리의 세부 설정 페이지 (경로명 수정할 계획)
    savingsGoal: '/management/savings-goal',
    savingsDetailSettings: '/saving-detail-setting',
    regularTransactionAmount: '/management/regular-transaction-amount',
    DetailSettings: '/management/regular-transaction-amount-detail-setting',
    DetailedHistory: '/management/regular-transaction-amount-detailed-history',
    assetByCategory: '/management/assets-by-category',
    scheduleManagement: '/management/schedule-management',
  });
  
  export default PATH;
  