import React, { useState, useEffect } from "react";
import { getCurrentWindow } from "@electron/remote";
import ElectronIcon from "@/assets/icons/electron.svg";
import MinimizeIcon from "@/assets/icons/minimize.svg";
import MaximizeIcon from "@/assets/icons/maximize.svg";
import RestoreIcon from "@/assets/icons/restore.svg";
import CloseIcon from "@/assets/icons/close.svg";
import { StyledHeader, StyledButtons } from "./styles";

const Header = () => {
    const [isMaximized, setIsMaximized] = useState(getCurrentWindow().isMaximized());

    useEffect(() => {
        const handleResize = () => {
            setIsMaximized(getCurrentWindow().isMaximized());
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const minimize = () => {
        getCurrentWindow().minimize();
    };

    const maximize = () => {
        const window = getCurrentWindow();

        if (window.isMaximized()) {
            window.unmaximize();
            setIsMaximized(false);
        } else {
            window.maximize();
            setIsMaximized(true);
        }
    };

    const close = () => {
        getCurrentWindow().close();
    };

    return (
        <StyledHeader className="header">
            <div className="logo-wrapper">
                <div className="logo"><img src={ElectronIcon} /></div>
                <h1>Electron Boilerplate</h1>
            </div>
            <StyledButtons className="action-buttons">
                <button onClick={minimize}>
                    <img src={MinimizeIcon} />
                </button>
                <button onClick={maximize}>
                    <img src={isMaximized ? RestoreIcon : MaximizeIcon} />
                </button>
                <button onClick={close}>
                    <img src={CloseIcon} />
                </button>
            </StyledButtons>
        </StyledHeader>
    );
};

export default Header;
