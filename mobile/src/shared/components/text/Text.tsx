import { TextProps } from 'react-native';
import { TextContainer } from './text.style';

interface MyTextProps extends TextProps {
  color?: string;
}

const Text = ({ color, ...props }: MyTextProps) => {
  return <TextContainer color={color} {...props} />;
};

export default Text;
