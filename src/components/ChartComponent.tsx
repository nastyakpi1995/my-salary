import React from "react";
import Band from "./charts/BarStacked";

interface IChartComponent {
    data: string[]
}

const ChartComponent:React.FC<IChartComponent> = ({ data }) => {

    return (
        <div>
            {data.length > 0 ? (
                <div>
                    <Band googleData={data} />
                </div>
            ) : null}
        </div>
    );
}
export default ChartComponent;
