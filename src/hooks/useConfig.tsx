import React from "react";

//
const options = {
    secondaryAxisPosition: ["top", "left", "right", "bottom"],
    secondaryAxisStack: [true, false],
    secondaryAxisShow: [true, false],
    tooltipAnchor: [
        "closest",
        "top",
        "bottom",
        "left",
        "right",
        "center",
        "gridTop",
        "gridBottom",
        "gridLeft",
        "gridRight",
        "gridCenter",
        "pointer",
    ],
    tooltipAlign: [
        "auto",
        "top",
        "bottom",
        "left",
        "right",
        "topLeft",
        "topRight",
        "bottomLeft",
        "bottomRight",
        "center",
    ],
} as const;

type SecondaryAxisPosition = typeof options["secondaryAxisPosition"][number];
type TooltipAnchor = typeof options["tooltipAnchor"][number];
type TooltipAlign = typeof options["tooltipAlign"][number];


export default function useChartConfig({
    googleData = [],
}: {
    googleData?: any;
}) {
    const [state, setState] = React.useState({
        googleData,
        data: makeDataFrom(googleData),
    });

    React.useEffect(() => {
        setState((old) => ({
            ...old,
            data: makeDataFrom(googleData),
        }));
    }, [googleData]);

    return {
        ...state,
    };
}

function makeDataFrom(
    googleData: any,
) {
    return [
        ...new Array(1),
    ].map((d, i) => makeSeries(i, googleData));
}

function makeSeries(
    i: number,
    googleData: any,
) {
    const filterData = googleData.filter((_:string, i: number) => i !== 0);
    return {
        label: `Series ${i + 1}`,
        data: filterData.map((el: string[]) => {
            const secondary = Math.round(+el[1].replace(',', '.'))
            return {
                primary: el[0],
                secondary: secondary,
            };
        }),
    };
}
