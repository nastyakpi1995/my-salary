import styled, {css} from "styled-components";

export const FieldStyled = styled.input<{primary?: boolean}>`
  color: #3B4554;
  font-size: 18px;
  line-height: 24px;
  border: 1px solid #3B4554;
  border-radius: 4px;
  background: white;
  ${(props) => props?.primary && css`
    border: none;
    padding: 0 !important;
  `}
  padding: 6px 20px;
`
