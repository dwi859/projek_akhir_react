import styled from "styled-components";

export const ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size:0.8rem;
    background:transparent;
    color:var(--mainYellow);
    border-width:0px;
   
    &:hover{
        background: var(--lightlueB);
        color: var(--mainBlue);
    }
`;