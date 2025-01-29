import styled from "styled-components";

export const MainHeaderContainer = styled.header`
    display: flex;
    padding: 12px 12px 24px 12px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    
    .input-container {
        display: flex;
        padding: 8px 16px 8px 12px;
        align-items: center;
        gap: 8px;
        flex: 1;
        background-color: #fff;
        box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.25) inset;
        border-radius: 900px;
        width: 70vw;

        button {
            width: 16px;
            height: 16px;
            background-color: transparent;
            outline: transparent;
            border: none;
            cursor: pointer;

            .icon {
                color: #DC0A2D;
                font-size: 16px;
            }
        }

        input {
            flex: 1;
            color:  #666;
            font-size: 15px;
            font-weight: 400;
            line-height: 18px; 
            border: none;
            outline: none;
        }
    }
`
