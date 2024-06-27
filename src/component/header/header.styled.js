import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #02050E;
    align-items: center;
    gap: 10px;
    flex-grow:0;
    div:nth-child(3) {
        display: none;
    }
    @media (max-width: 1024px) {
        div:nth-child(3) {
            display: flex;
        }
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    gap: 10px;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    @media (max-width: 1024px) and (min-width: 768px){
        width: 100%;
        justify-content: center;
        align-items: center;
        img {
            width: 100px;
            height: 100px;
        }
    }
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
        }
    }
`;

export const Logo = styled.p`
    content: pointer;
    color: #FFFFFF;
    @media (max-width: 1024px) and (min-width: 768px){
        font-size: 40px;
    }

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const Button = styled.div`
    display: inline-flex;
    align-items: center;
`;

export const Content = styled.ul`
    display: flex;
    padding: 0;
    list-style-type: none;
`;

export const ContentLi = styled.li`
    position: relative;
    height: auto;
    color: #ADB9C7;
    cursor: pointer;
    margin: 0 20px;
    text-decoration: none;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: calc(100% - 20%);
        height: 1px;
        background-color: #1E50FF;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
    }
    &:hover {
        color: #FFFFFF;
        &::after {
            opacity: 1;
        }
    }
`;

export const ConnectButton = styled.button`
    color: #FFFFFF;
    padding: 5px 20px;
    opacity : 1;
    border: 1px solid #1E50FF;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0);
    &:hover {
        background: #1E50FF;
    }
`;