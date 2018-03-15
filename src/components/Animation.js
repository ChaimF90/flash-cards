import styled, { keyframes } from 'styled-components';

const animation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }

`;

export default animation;