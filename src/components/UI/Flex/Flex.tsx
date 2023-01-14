import styled from "styled-components";

interface IFlex {
    cursor?: string;
    direction?: string;
    align?: string;
    justify?: string;
    padding?: string;
}
export const Flex = styled.div<IFlex>`
  display: flex;
  align-items: ${(props) => props.align || "center"};
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "space-between"};
`;