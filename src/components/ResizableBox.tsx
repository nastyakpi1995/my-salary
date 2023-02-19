import React from "react";
import { ResizableBox as ReactResizableBox } from "react-resizable";

import "react-resizable/css/styles.css";

interface IResizableBox {
    children: React.ReactNode;
    width: number;
    height: number;
}

const ResizableBox:React.FC<Partial<IResizableBox>> = ({
   children,
   width = 600,
   height = 300,
}) => {
    return (
        <div style={{ marginLeft: 20 }}>
            <div
                style={{
                    display: "inline-block",
                    width: "auto",
                    background: "white",
                    padding: ".5rem",
                    borderRadius: "0.5rem",
                    boxShadow: "0 30px 40px rgba(0,0,0,.1)",
                }}
            >
                <ReactResizableBox width={width} height={height}>
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        {children}
                    </div>
                </ReactResizableBox>
            </div>
        </div>
    );
}
export default ResizableBox
