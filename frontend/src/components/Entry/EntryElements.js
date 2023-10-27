import styled from "styled-components";

export const EntryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--green);
    height: 430px;
    width: 700px;
    border-radius: 20px;
`;

export const EntryItem = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: 30px;
    height: 50px;
    width: 700px;
`;

export const EntryName = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
    padding-top: 4px;
    height: 30px;
    width: auto;
    color: var(--text-color);
    font-weight: 600;
    font-size: 22px;
`;

export const EntryText = styled.input`
    display: flex;
    align-items: center;
    margin-left: 0px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    width: 350px;
    border-radius: 20px;
    color: var(--black);
    font-weight: 600;
    font-size: 16px;
`;

export const EntryDivider = styled.div`
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 10px;
    padding-top: 4px;
    height: 30px;
    width: auto;
    color: var(--text-color);
    font-weight: 600;
    font-size: 22px;
`;

export const EntryTextSmall = styled.input`
    display: flex;
    align-items: center;
    margin-left: 0px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    width: 100px;
    border-radius: 20px;
    color: var(--black);
    font-weight: 600;
    font-size: 16px;
`;

export const EntryDrop = styled.select`
    display: flex;
    align-items: center;
    margin-left: 0px;
    padding-left: 10px;
    padding-right: 10px;
    height: 30px;
    width: 150px;
    border-radius: 20px;
    color: var(--black);
    font-weight: 600;
    font-size: 16px;
`;

export const EntrySubmit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 100px;
    background-color: #00FF00;
    border-radius: 20px;
    color: var(--text-color);
    font-weight: 600;
    font-size: 16px;
    transition: color 0.15s ease-in-out, background-color 0.15s;

    &:hover {
        cursor: pointer;
        color: #000000;
        opacity: 50%;
        /* background-color: #00ff0080; */
    }
`;

export const EntryButtonContainer = styled.div`
    display: flex;
    align-items: center;
    height: 40px;
    width: 100px;
    margin: 30px;
`;