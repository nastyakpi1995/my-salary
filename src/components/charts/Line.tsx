import ResizableBox from "../ResizableBox";
import useDemoConfig from "../../hooks/useConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

 const Line:React.FC<any> = ({ googleData }) => {
    const { data } = useDemoConfig({
        googleData,
    });

    const primaryAxis = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>
        >(
        () => ({
            getValue: (datum) => datum.primary as unknown as Date,
        }),
        []
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>[]
        >(
        () => [
            {
                getValue: (datum) => datum.secondary,
            },
        ],
        []
    );

    return (
        <>
            <ResizableBox>
                <Chart
                    options={{
                        data,
                        primaryAxis,
                        secondaryAxes,
                    }}
                />
            </ResizableBox>
        </>
    );
}
export default Line;
