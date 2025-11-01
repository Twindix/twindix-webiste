import { constantsData } from "./constants";
import { routeUrlsData } from "./route-urls";

export const footerItemsData = {
    col1: {
        title: constantsData.labels.about,
        urls: [
            {
                href: routeUrlsData.about,
                label: constantsData.urls.about,
            },
            {
                href: routeUrlsData.prize,
                label: constantsData.urls.prize,
            },
            {
                href: routeUrlsData.whatsTwindix,
                label: constantsData.urls.whatsTwindix,
            },
            {
                href: routeUrlsData.representativesAndFranchises,
                label: constantsData.urls.representativesAndFranchises,
            },
        ],
    },
    col2: {
        title: constantsData.labels.assessments,
        urls: [
            {
                href: routeUrlsData.twindixExecutives,
                label: constantsData.urls.twindixExecutives,
            },
            {
                href: routeUrlsData.jobBarAssessments,
                label: constantsData.urls.jobBarAssessments,
            },
        ],
    },
    col3: {
        title: constantsData.labels.doItNow,
        urls: [
            {
                href: routeUrlsData.getTheAssessment,
                label: constantsData.urls.getTheAssessment,
            },
        ],
    },
};
