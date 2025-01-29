import styled from 'styled-components'

export const PokemonCardWrapper = styled.div `
    display: flex;
    max-height: 170px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background: #FFF;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.20);
    padding: 6px 8px;

    position: relative;
    z-index: 2;

    .id-text {
        color: #666;
        text-align: right;
        font-size: 8px;
        font-weight: 400;
        line-height: 12px;
        width: 100%;
    }
    .pokemon-image{
        display: flex;
        width: 72px;
        height: 72px;
        justify-content: center;
        align-items: center;
    }
    .pokemon-title{
        color:#1D1D1D;
        font-size: 10px;
        font-weight: 400;
        line-height: 16px;
    }
    .card-shadow{
        display: flex;
        padding: 24px 8px 4px 8px;
        align-items: flex-start;
        align-self: stretch;
        border-radius: 7px;
        background-color: #EFEFEF;

        position: absolute;
        top: 65%;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
    }
`