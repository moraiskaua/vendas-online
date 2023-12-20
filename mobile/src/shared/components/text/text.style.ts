import styled from 'styled-components/native';

interface TextContainerProps {
  color: string;
}

export const TextContainer = styled.Text<TextContainerProps>`
  ${({ color }) => (color ? `color: ${color};` : '')}
`;
