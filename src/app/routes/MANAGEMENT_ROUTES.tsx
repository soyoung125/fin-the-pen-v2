import PATH from "../../domain/constants/path";
import { RouterDOM } from "../../domain/types/common";
import AssetByCategory from "../../pages/AssetManagement/settings/AssetByCategory";
import RegularTransactionAmount from "../../pages/AssetManagement/settings/RegularTransactionAmount";
import DetailSettings from "../../pages/AssetManagement/settings/RegularTransactionAmount/DetailSettings";
import DetailedHistory from "../../pages/AssetManagement/settings/RegularTransactionAmount/DetailedHistory";
import SavingsGoal from "../../pages/AssetManagement/settings/SavingsGoal";
import ScheduleManagement from "../../pages/AssetManagement/settings/ScheduleManagement";

const MANAGEMENT_ROUTES: RouterDOM[] = [
    {
      path: PATH.savingsGoal,
      element: <SavingsGoal />,
    },
    {
      path: PATH.regularTransactionAmount,
      element: <RegularTransactionAmount />,
    },
    {
      path: PATH.DetailSettings,
      element: <DetailSettings />,
    },
    {
      path: PATH.DetailedHistory,
      element: <DetailedHistory />,
    },
    {
      path: PATH.assetByCategory,
      element: <AssetByCategory />,
    },
    {
      path: PATH.scheduleManagement,
      element: <ScheduleManagement />,
    },
  ];
  
  export default MANAGEMENT_ROUTES;
  