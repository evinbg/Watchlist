import styled from "styled-components";

export const Foot = styled.footer`
    display: flex;
    justify-content: center;
    background-color: var(--blue);
    height: 148px;
    bottom: 0px;
    width: 100%;
    box-shadow: inset 0px 6px #C4C4C4;
`;

export const FootContainer = styled.footer`
    display: flex;
    justify-content: space-evenly;
    padding-top: 24px;
    height: 124;
    width: 85%;
`;

export const FootLogo = styled.div`
    display: flex;
    color: var(--text-color);
    font-size: 30px;
    font-weight: 600;
`;

export const FootInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    color: var(--text-color);
`;

export const FootContact = styled.div`
    display: flex;
    color: var(--text-color);
    margin-bottom: 0.5rem;
    font-size: 20px;
    font-weight: 500;
`;

export const FootLink = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    color: var(--text-color);
`;