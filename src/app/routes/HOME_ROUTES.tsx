import PATH from "../../domain/constants/path";
import { RouterDOM } from "../../domain/types/common";
import AssetManagement from "../../pages/AssetManagement";
import SavingsDetailSettings from "../../pages/AssetManagement/settings/SavingsGoal/SavingsDetailSettings";
import Home from "../../pages/Home";
import MyPage from "../../pages/MyPage";
import Notification from "../../pages/Notification";
import Settings from "../../pages/Settings";
import SignIn from "../../pages/SignIn";
import SignUp from "../../pages/SignUp";

const HOME_ROUTES: RouterDOM[] = [
    {
        path: PATH.home,
        element: <Home />,
    },
    {
        path: PATH.signIn,
        element: <SignIn />,
    },
    {
        path: PATH.signUp,
        element: <SignUp />,
    },
    {
        path: PATH.myPage,
        element: <MyPage />,
    },
    {
        path: PATH.notification,
        element: <Notification />,
    },
    {
        path: PATH.assetManagement,
        element: <AssetManagement />,
    },
    {
        path: PATH.savingsDetailSettings,
        element: <SavingsDetailSettings />,
    },
    {
        path: PATH.settings,
        element: <Settings />,
    },
    // {
    //   path: PATH.test,
    //   element: <TestContainer />,
    // },
];

export default HOME_ROUTES;
