import styled from "styled-components";
import React from "react";


const Page:React.FC<any> = ({ children }) => {
    return <PageTag>

        {children}
    </PageTag>;
}
export default Page;

const PageTag = styled.div`
  position: relative;
  /* робимо фон градієнтом */
  background: linear-gradient(62.93deg, #66659e 19.68%, #9a8290 89.55%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
