import styled from 'styled-components/native';

interface TextContainerProps {
  size: string;
  color: string;
}

export const TextContainer = styled.Text<TextContainerProps>`
  ${({ size }) => (size ? `font-size: ${size};` : '')}
  ${({ color }) => (color ? `color: ${color};` : '')}
`;
