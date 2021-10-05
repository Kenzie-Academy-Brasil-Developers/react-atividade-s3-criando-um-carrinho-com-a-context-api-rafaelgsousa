import styled from "styled-components";

export const Container = styled.div`
    list-style: none;
    padding: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 310px;
    width: 100%;
    margin: 0 auto;
    ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0px;
        margin: 0px;
    }
    h2 {
        padding: 10px;
        margin: 10px;
    }
`

export const List = styled.li`
    display: flex;
    flex-direction: column;
    margin: 10px;
    min-width: 90px;
    padding: 5px;
    border: 1px solid tomato;
    border-radius: 5px;
    p{
        font-size: 20px;
        font-weight: bold;
    }
`