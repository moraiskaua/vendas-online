import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, ButtonContainerSecondary } from './button.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, margin, type, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.ButtonTypes.secondary:
      return (
        <ButtonContainerSecondary margin={margin} {...props}>
          <Text color="#fff">{title}</Text>
        </ButtonContainerSecondary>
      );

    default:
      return (
        <ButtonContainer margin={margin} {...props}>
          <Text color="#fff">{title}</Text>
        </ButtonContainer>
      );
  }
};

export default Button;
