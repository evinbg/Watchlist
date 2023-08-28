import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

export const Side = styled.div`
    z-index: 999;
    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--pink);
    display: grid;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const SideCloseIcon = styled(FaTimes)`
    color: var(--text-color);
    font-size: 40px;
`;

export const SideIcon = styled.div`
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    outline: none;
    cursor: pointer;
`;

export const SideItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SideLinkItems = styled.div`
    color: var(--text-color);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 1rem;
    padding-bottom: 0.25rem;
    font-size: 1.5rem;
    transition: 0.2 ease-in-out;
    text-underline-offset: 0.2em;
    cursor: pointer;
    transition: color 0.25s ease-in-out;

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
        background-color: var(--dark);
        transform-origin: bottom center;
        transition: transform 0.25s ease-out;
        transform: scaleX(0);
    }
  
    & a:hover::after {
        transform: scaleX(1);
        transform-origin: bottom center;
    }
`;
