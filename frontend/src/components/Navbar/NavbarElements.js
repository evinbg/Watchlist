import styled from "styled-components";

export const Nav = styled.nav`
    background: var(--pink);
    height: 70px;
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 20px;
    position: fixed;
    top: 0;
    box-shadow: 0px 6px #dadada;
    z-index: 998;
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    color: var(--text-color);
`;

export const NavLogo = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-left: 30px;
    margin-right: 30px;
`;

export const NavLinkItems = styled.div`
    position: relative;
    font-weight: 500;
    margin: 20px;
    padding-bottom: 0.25rem;
    transition: color 0.25s ease-in-out;
    text-decoration: none;

    &:hover {
        color: var(--dark);
    }

    & a::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        left: 0;
        background-color: var(--text-color);
        transform-origin: bottom center;
        transition: transform 0.25s ease-out;
        transform: scaleX(0);
    }
  
    & a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom center;
    }

    .active {
        text-decoration: underline 3px var(--text-color);
        text-underline-offset: 0.4rem;
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavGithub = styled.a`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-left: auto;
    margin-right: 30px;
    font-weight: 400;
    font-size: 40px;
    transition: color 0.25s ease-in-out;

    &:hover {
        color: var(--dark);
    }

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

export const NavHamContainer = styled.div`
    display: none;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    font-weight: 500;
    font-size: 40px;
    color: var(--text-color);

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;

export const NavHam = styled.div`
    display: none;
    float: right;
    margin-left: auto;
    margin-right: 30px;
    position: absolute;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        display: flex;
    }
`;