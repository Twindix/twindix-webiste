import circlesWithCheck from "@/app/assets/icons/circles_with_check.svg";
import cursor from "@/app/assets/icons/cursor.svg";
import diagram from "@/app/assets/icons/diagram.svg";
import eye from "@/app/assets/icons/eye.svg";
import handWithGem from "@/app/assets/icons/hand_with_gem.svg";
import rocket from "@/app/assets/icons/rocket.svg";
import zoomAnalytics from "@/app/assets/icons/zoom_analytics.svg";

import { constantsData } from "./constants";

export const whyTwindixAssessmentsData = [
    {
        colSpan: 5,
        img: circlesWithCheck,
        imgAlt: "circles_with_check",
        title: constantsData.titles.credible,
    },
    {
        colSpan: 7,
        img: zoomAnalytics,
        imgAlt: "zoom_analytics",
        title: constantsData.titles.analysisBeyondSurface,
    },
    {
        colSpan: 7,
        img: diagram,
        imgAlt: "diagram",
        title: constantsData.titles.realImpactDrivesToGrow,
    },
    {
        colSpan: 5,
        img: handWithGem,
        imgAlt: "hand_with_gem",
        title: constantsData.titles.designedFitUniqueReality,
    },
    {
        colSpan: 5,
        img: cursor,
        imgAlt: "cursor",
        title: constantsData.titles.actionable,
    },
    {
        colSpan: 7,
        img: eye,
        imgAlt: "eye",
        title: constantsData.titles.intuitiveClarityForComplexVisions,
    },
    {
        colSpan: 7,
        img: rocket,
        imgAlt: "rocket",
        title: constantsData.titles.contemporaryInnovationPrecedes,
    },
];
