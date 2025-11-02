import { routeUrlsData } from "./route-urls";

export const footerItemsData = {
    col1: {
        title: "About",
        urls: [
            {
                href: routeUrlsData.about,
                label: "About Us",
            },
            {
                href: routeUrlsData.prize,
                label: "The Prize",
            },
            {
                href: routeUrlsData.whatsTwindix,
                label: "What's Twindix ?",
            },
            {
                href: routeUrlsData.representativesAndFranchises,
                label: "Representatives & Franchises",
            },
        ],
    },
    col2: {
        title: "Assessments",
        urls: [
            {
                href: routeUrlsData.twindixExecutives,
                label: "Twindix Executives",
            },
            {
                href: routeUrlsData.jobBarAssessments,
                label: "Job Bar Assessments",
            },
        ],
    },
    col3: {
        title: "Do It Now",
        urls: [
            {
                href: routeUrlsData.getTheAssessment,
                label: "Get The Assessment",
            },
        ],
    },
};
