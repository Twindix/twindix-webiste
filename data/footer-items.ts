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
                label: "Twindix Executives",
                targetId: "executives_assessment",
            },
            {
                label: "Job Bar Assessments",
                targetId: "job_bar_assessment",
            },
        ],
    },
    col3: {
        title: "Do It Now",
        urls: [
            {
                isExternal: true,
                label: "Get The Assessment",
                targetId: "https://assessment.twindix.com",
            },
        ],
    },
};
