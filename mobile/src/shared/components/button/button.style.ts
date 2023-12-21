import { TouchableOpacityProps } from 'react-native';
import styled from 'styled-components/native';

interface PrimaryButtonProps extends TouchableOpacityProps {
  margin: string;
}

export const PrimaryButton = styled.TouchableOpacity<PrimaryButtonProps>`
  width: 100%;
  border-radius: 6px;
  background-color: green;
  padding: 12px;
  justify-content: center;
  align-items: center;

  ${({ margin }) => (margin ? `margin: ${margin};` : '')};
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: red;
`;

export const DisabledButton = styled(PrimaryButton)`
  background-color: gray;
`;
