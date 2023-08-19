import styled from "styled-components";

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    background-color: #02050E;
    align-items: flex-start;
    padding: 50px 200px;
    gap: 10px;
    flex-grow:0;
`;

export const FooterDetail = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const Detail = styled.div`
    max-width: 300px;
    margin-right: 20px;
`;

export const Title = styled.div`
    display: flex;
    color: #ffff;
    align-items: center;
`;

export const Content = styled.div`
    margin-top: 10px;
    color: gray;
`;

export const CopyRight = styled.div`
    justify-content: flex-start;
    color: #ffff;
`;

export const ResourceUl = styled.ul`
    padding: 0;
`;

export const ResourceLi = styled.li`
    list-style-type: none;
    color: gray;
    &:hover {
        cursor: pointer;
        color: #ffff;
    }
`;

export const Img = styled.img`
    margin-right: 15px;
    &:hover {
        cursor: pointer;
    }
`;

export const Text = styled.div`
    color: gray;
    margin: 15px 0;
`;