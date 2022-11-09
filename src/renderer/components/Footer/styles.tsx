import React, { ReactNode } from "react";
import styled from "styled-components";

interface Interface {
    className?: string;
    children?: ReactNode;
}

const Footer = ({ className, children }: Interface) => <div className={className}>{children}</div>;

export const StyledFooter = styled(Footer)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    border-top: 1px solid #e3e5e6;
`;
