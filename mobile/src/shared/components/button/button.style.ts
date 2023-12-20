import styled from 'styled-components/native';

interface ButtonContainerProps {
  margin: string;
}

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  width: 100%;
  border-radius: 6px;
  background-color: green;
  padding: 12px;
  justify-content: center;
  align-items: center;

  ${({ margin }) => (margin ? `margin: ${margin};` : '')};
`;
