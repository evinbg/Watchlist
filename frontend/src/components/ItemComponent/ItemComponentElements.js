import styled from "styled-components";

export const IT = styled.div`
    background-color: var(--green);
    width: 700px;
    height: 150px;
    display: flex;
    align-items: center;
    border-radius: 20px;
    margin: 10px;

    @media screen and (max-width: 900px) {
        width: 85%;
    }
`;

export const ITImgContainer = styled.div`
    height: 169px;
    width: 300px;
    display: flex;
    border-style: solid;
    border-width: 4px;
    border-radius: 4px;
    border-color: var(--text-color);
    align-items: center;
    margin-left: 20px;
`;

export const ITThumbnail = styled.img`
    height: 100%;
`;

export const ITInfoContainer = styled.div`
    color: var(--text-color);
    margin-left: 20px;
    width: 650px;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
`;

export const ITTitleElement = styled.div`
    margin: 0.5rem;
    margin-bottom: 0.25rem;
    margin-left: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ITInfoFormatter = styled.div`
    color: var(--text-color);
    width: auto;
    height: 2.5rem;
    display: flex;
    overflow: hidden;
`;

export const ITInfoElement = styled.div`
    margin: 0.5rem;
    margin-left: 0;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ITDateContainer = styled.div`
    width: 150px;
    height: 80%;
    color: var(--text-color);
    display: flex;
    flex-direction: column;
`;

export const ITDate = styled.div`
    width: 150px;
    display: flex;
    align-items: center;
    color: var(--text-color);
    margin-top: 0.5rem;
`;

export const ITButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const ITEdit = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    margin-left: 0px;
    margin-top: auto;
    height: 40px;
    width: 100px;
    background-color: var(--blue);
    border-radius: 20px;
    color: var(--text-color);
    font-weight: 600;
    font-size: 16px;
    transition: color 0.15s ease-in-out, background-color 0.15s;

    &:hover {
        cursor: pointer;
        color: #000000;
        opacity: 50%;
        /* background-color: var(--blue); */
    }
`;

export const ITDelete = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    margin-top: 10px;
    height: 40px;
    width: 100px;
    background-color: #FF0000;
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