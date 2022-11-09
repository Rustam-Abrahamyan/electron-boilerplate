import React, { ReactNode } from "react";
import styled from "styled-components";

interface Interface {
    className?: string;
    children?: ReactNode;
}

const Sidebar = ({ className, children }: Interface) => <div className={className}>{children}</div>;

export const StyledSidebar = styled(Sidebar)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    border-right: 1px solid #e3e5e6;
`;
