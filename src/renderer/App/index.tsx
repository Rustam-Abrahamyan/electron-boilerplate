import React from "react";
import { ThemeProvider } from "styled-components";
import defaultTheme from "@/renderer/styles/defaultTheme";
import { GlobalStyle } from "@/renderer/styles/GlobalStyle";
import Header from "@/renderer/components/Header";
import Sidebar from "@/renderer/components/Sidebar";
import Content from "@/renderer/components/Content";
import Footer from "@/renderer/components/Footer";
import { StyledContainer, StyledMain } from "./styles";

const App = () => {
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <StyledContainer className="container">
                    <Header />
                    <StyledMain className="main">
                        <Sidebar />
                        <Content />        
                        <Sidebar />
                    </StyledMain>
                    <Footer />
                </StyledContainer>
            </ThemeProvider>
        </>
    );
};

export default App;
