import React, { ReactNode } from "react";
import styled from "styled-components";

interface Interface {
    className: string;
    children: ReactNode;
}

const Container = ({ className, children }: Interface) => <div className={className}>{children}</div>;

export const StyledContainer = styled(Container)`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Main = ({ className, children }: Interface) => <div className={className}>{children}</div>;

export const StyledMain = styled(Main)`
    display: flex;
    flex-grow: 1;
`;
