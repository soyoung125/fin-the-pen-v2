import { createBrowserRouter, Outlet } from 'react-router-dom';
import ANALYSIS_ROUTES from './routes/ANALYSIS_ROUTES';
import HOME_ROUTES from './routes/HOME_ROUTES';
import MANAGEMENT_ROUTES from './routes/MANAGEMENT_ROUTES';
import AnalysisLayout from '../component/layouts/containerLayout/AnalysisLayout';
import HomeLayout from '../component/layouts/containerLayout/HomeLayout';
import ManagementLayout from '../component/layouts/containerLayout/ManagementLayout';

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout />,
            children: [
                {
                    path: "/",
                    children: HOME_ROUTES,
                },
                {
                    path: "/management",
                    element: <ManagementLayout />,
                    children: MANAGEMENT_ROUTES,
                },
                {
                    path: "/analysis",
                    element: <AnalysisLayout />,
                    children: ANALYSIS_ROUTES,
                },
            ],
        },
    ],
    {
        basename: "/fin-the-pen-web-v2",
    }
);

export default router;
