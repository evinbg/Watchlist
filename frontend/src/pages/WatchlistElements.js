import styled from "styled-components";

export const WatchlistContainer = styled.div`
    background-color: var(--background);
    min-height: 100vh;
`;

export const WatchlistHeader = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 120px;
    margin: 0;
    margin-bottom: 1rem;
    color: var(--text-color);
    font-size: 40px;
    font-weight: 600;
`;

export const WatchlistObjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const WatchlistBottomMargin = styled.div`
    height: 100px;
    width: 100%;
`;