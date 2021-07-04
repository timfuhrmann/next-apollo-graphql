import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { font } from "./font";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    ${font};

    body {
        font-family: "Circular Std", Helvetica, Arial, sans-serif;
        font-size: 1.6rem;
        background-color: ${p => p.theme.gray50};
        color: ${p => p.theme.gray900};
    }
`;
