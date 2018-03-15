import styled, { css } from 'styled-components';

const Card = styled.div`
    cursor: pointer;
    height: 85%;
    width: 250px;
    border-top: solid 3px gray;
    border-bottom: solid 1px snow;
    border-right: solid 1px snow;
    border-left: solid 1px snow;
    background-color: white;
    box-shadow: 0px 1px 12px rgba(0,0,0,0.2);
    margin-top: 30px;
    text-align: center;
    margin-right: 40px;
    display: inline-block;
    vertical-align:top;
    transition: all 0.5s linear;

    ${ props => props.flip && css`
        transform: rotateY(180deg);
        background-color: #fafafa;
        border-top: none;
        height: 90%;
        width: 280px;
        margin-right: 0;
        margin-left: 0;
    `};
`;

export default Card;