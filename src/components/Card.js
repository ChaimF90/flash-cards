import styled, { css } from 'styled-components';

const Card = styled.div`
    cursor: pointer;
    height: 85%;
    border-top: solid 3px gray;
    border-bottom: solid 1px snow;
    border-right: solid 1px snow;
    border-left: solid 1px snow;
    background-color: white;
    box-shadow: 0px 1px 12px rgba(0,0,0,0.2);
    margin-top: 30px;
    text-align: center;
    display: inline-block;
    vertical-align:top;
    transition: all 0.5s linear;
    margin: 12px;
    width: 250px;

    ${ props => props.flip && css`
        transform: rotateY(180deg);
        background-color: #fafafa;
        border-top: none;
        width: 275px;
        margin: 0;
        height: 90%;
    `};
`;

export default Card;