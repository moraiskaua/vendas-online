import { TextProps } from 'react-native';
import { TextContainer } from './text.style';

interface MyTextProps extends TextProps {
  size?: string;
  color?: string;
}

const Text = ({ size, color, ...props }: MyTextProps) => {
  return <TextContainer color={color} size={size} {...props} />;
};

export default Text;
