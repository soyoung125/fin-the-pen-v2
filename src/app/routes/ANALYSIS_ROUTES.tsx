import PATH from "../../domain/constants/path";
import { RouterDOM } from "../../domain/types/common";
import Analysis from "../../pages/Analysis";
import AnalysisDetail from "../../pages/Analysis/AnalysisDetail";

const ANALYSIS_ROUTES: RouterDOM[] = [
    {
        path: PATH.analysis,
        element: <Analysis />,
    },
    {
        path: PATH.analysisDetail,
        element: <AnalysisDetail />,
    },
];

export default ANALYSIS_ROUTES;
