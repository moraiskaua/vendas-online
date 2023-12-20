import { Text, TouchableOpacityProps } from 'react-native';
import { ButtonContainer } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin }: ButtonProps) => {
  return (
    <ButtonContainer margin={margin}>
      <Text>{title}</Text>
    </ButtonContainer>
  );
};

export default Button;
