import React, { ReactNode } from "react";
import styled from "styled-components";

interface Interface {
    className?: string;
    children?: ReactNode;
}

const Content = ({ className, children }: Interface) => <div className={className}>{children}</div>;

export const StyledContent = styled(Content)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
`;
