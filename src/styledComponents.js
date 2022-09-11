import styled, { css } from "styled-components";

// HEADER
export const HeaderDiv = styled.div`
background-color: orange;
width: 100%;
`

export const HeaderTitle = styled.div`
background-color: aqua;
font-size: 24px;
font-weight: bold;
line-height: 50px;
text-align: center;
width: 100%;
cursor: pointer;
`

// Navigation
export const NavigationDiv = styled.div`
width: 100%;
display: flex;
`

export const NavigationBtn = styled.div`
width: calc(100% / 3 - 4px);
text-align: center;
cursor: pointer;
line-height: 30px;
font-weight: bold;
border: 2px solid black;
`