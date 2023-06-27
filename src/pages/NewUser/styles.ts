import styled from 'styled-components';


export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const CreateContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color: #FFFFFF;
    box-shadow: 0 0 50px 4px #00000070;

    border-radius: 8px;
    padding: 20px;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color: #81259D;
    margin: auto;   
`


export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    button {
        padding: 5px 10px;
        font-size: 16px;
        font-weight: 700;
        border: none;
        background-color: transparent;
      }
      button:hover {
        text-decoration: underline;
        cursor: pointer;
      }
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`

