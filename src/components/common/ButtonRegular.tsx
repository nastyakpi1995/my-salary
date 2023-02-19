import React from "react";
import styled from "styled-components";

interface IButton {
    text: string;
    onClick: () => void;
    type: 'submit' | 'button';
}
const ButtonRegular:React.FC<Partial<IButton>> = ({
   text, onClick, type = 'button'
}) => {
    return (
        <div>
            <Button onClick={onClick} type={type}>
                {text}
            </Button>
        </div>
    )
}

export default ButtonRegular;

const Button = styled.button`
  background: white;
  color: palevioletred;

  font-size: 1em;
  margin: 1em 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`
