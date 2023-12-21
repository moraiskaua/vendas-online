import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { DisabledButton, PrimaryButton, SecondaryButton } from './button.style';
import Text from '../text/Text';
import { theme } from '../../themes/theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({
  title,
  margin,
  type,
  disabled,
  loading,
  onPress,
  ...props
}: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled) onPress();
  };

  const renderButton = (color: string) => {
    return (
      <>
        {loading ? (
          <ActivityIndicator color={color} />
        ) : (
          <Text color={color}>{title}</Text>
        )}
      </>
    );
  };

  if (disabled) {
    return (
      <DisabledButton margin={margin} {...props} disabled={disabled}>
        {renderButton('#fff')}
      </DisabledButton>
    );
  }

  switch (type) {
    case theme.buttons.ButtonTypes.secondary:
      return (
        <SecondaryButton margin={margin} {...props} onPress={handleOnPress}>
          {renderButton('#fff')}
        </SecondaryButton>
      );

    default:
      return (
        <PrimaryButton margin={margin} {...props} onPress={handleOnPress}>
          {renderButton('#fff')}
        </PrimaryButton>
      );
  }
};

export default Button;
