import styled from "styled-components";

export const PokemonsListContainer = styled.div `
    display: grid;
    grid-template-columns: repeat(6, minmax(100px, 1fr));
    grid-template-rows: repeat(auto-fill, minmax(100px, 1fr));

    @media screen and (max-width: 1080px) {
        grid-template-columns: repeat(4, minmax(100px, 1fr));
    }
    @media screen and (max-width: 850px){
        grid-template-columns: repeat(3, minmax(100px, 1fr));
    }
    @media screen and (max-width: 500px){
        grid-template-columns: repeat(2, minmax(100px, 1fr));
    }
    @media screen and (max-width: 370px){
        grid-template-columns: repeat(1, minmax(100px, 1fr));
    }

    flex: 1;
    
    padding: 24px 12px 0px 12px;
    gap: 12px;

    align-self: stretch;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
    padding-bottom: 20px;
`