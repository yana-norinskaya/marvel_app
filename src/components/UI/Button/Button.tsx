import styled from "styled-components";
import { theme } from "../../../styles/style";

interface IButton {
  width?: string;
  background?: string;
  margin?: string;
}

export const Button = styled.button<IButton>`
    background: ${({ background }) => background || theme.colors.primary};
    text-align: center;
    height: 30px;
    width: ${({ width }) => width || "101px"};
    color: #FFFFFF;
    border: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-transform: uppercase;
    border-radius: 5px 0 5px 0;
    margin: ${({ margin }) => margin || "0"};
    transition: all 300ms ease;
    display: block;
    position: relative;
      &:hover{
        transform: translateY(-3px);
`;
