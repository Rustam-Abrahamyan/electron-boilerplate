import React, { ReactNode } from "react";
import styled from "styled-components";

interface Interface {
    className?: string;
    children?: ReactNode;
}

const Header = ({ className, children }: Interface) => <div className={className}>{children}</div>;

export const StyledHeader = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-app-region: drag;
    height: 40px;
    border-bottom: 1px solid #e3e5e6;

    & > .logo-wrapper {
        display: flex;
        align-items: center;

        & .logo {
            width: 30px;
            margin: 0 10px;
        }

        & h1 {
            margin-left: 10px;
            font-size: 18px;
            font-weight: 500;
            color: #5e6366;
        }
    }
`;

const Buttons = ({ className, children }: Interface) => <div className={className}>{children}</div>;

export const StyledButtons = styled(Buttons)`
    margin: auto 10px auto auto;
    -webkit-app-region: no-drag;

    & > button {
        width: 21px;
        height: 21px;
        margin: 0 0 0 5px;
        padding: 2px;
        border: 1px solid #e3e5e6;
        border-radius: 4px;
        color: #5e6366;
        cursor: pointer;

        & > img {
           width: 100%;
           height: 100%;
           height: 100%;
        }
    }
`;
