import styled from "styled-components";

export const theme = {
    colors: {
        primary: "#9F0013",
        dark: "#232222",
        grey: "#5C5C5C",
    },
    borders: {
        s: 4,
        m: 8,
        l: 12,
        round: "100%",
    },
    fontWeight: {
        s: 400,
        m: 700,
    },
    fontSize: {
        s: "14px",
        m: "18px",
        m2: "22px",
        l: "24px",
    },
};

export const Container = styled.div`
  width: 1100px;
  margin: 0 auto;
  min-height: 100%;
  position: relative;
`

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

interface IPadding {
    top?: string;
    bottom?: string;
    right?: string;
    left?: string;
    padding?: string;
}
export const Padding = styled.div<IPadding>`
  padding-top: ${(props) => props.top || "0"};
  padding-bottom: ${(props) => props.bottom || "0"};
  padding-right: ${(props) => props.right || "0"};
  padding-left: ${(props) => props.left || "0"};
  padding: ${(props) => props.padding || "0"};
`;