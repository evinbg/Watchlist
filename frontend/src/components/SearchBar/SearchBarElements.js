import styled from "styled-components";

export const Search = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 650px;

    @media screen and (max-width: 900px) {
        width: 85%;
    }
`;

export const SearchLabel = styled.label`
    /* margin-right: 1rem;
    font-size: calc(9px + 2vmin);
    font-weight: 400;
    width: 200px; */
`;

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 650px;

    @media screen and (max-width: 900px) {
        width: 85%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 2.8rem;
    width: 600px;
    background: #f5f5f5;
    outline: none;
    border: none;
    border-radius: 1.625rem;
    padding: 0 3.5rem 0 1.5rem;
    font-size: 18px;
`;

export const SearchButton = styled.div`
    font-size: 20px;
    font-weight: 500;
    color: black;
    color: var(--dark);
    display: flex;
    margin-right: 20px;
    position: absolute;

    &:hover {
        cursor: pointer;
    }
`;