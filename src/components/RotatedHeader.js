import Styled from 'styled-components';
import Header from './Header';

const RotadedHeader = Header.extend`
    transform: rotateY(180deg);
`;

export default RotadedHeader;