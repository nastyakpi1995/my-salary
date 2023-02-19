import ResizableBox from "../ResizableBox";
import useDemoConfig from "../../hooks/useConfig";
import React from "react";
import { AxisOptions, Chart } from "react-charts";

const BarStacked:React.FC<{googleData: string[]}> = ({ googleData }) => {
    const { data } = useDemoConfig({
        googleData,
    });

    const primaryAxis = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>
        >(
        () => ({
            getValue: (datum) => datum.primary,
        }),
        []
    );

    const secondaryAxes = React.useMemo<
        AxisOptions<typeof data[number]["data"][number]>[]
        >(
        () => [
            {
                getValue: (datum) => datum.secondary,
                stacked: true,
            },
        ],
        []
    );
    return (
        <>
            <ResizableBox width={600} height={300}>
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
export default BarStacked;
