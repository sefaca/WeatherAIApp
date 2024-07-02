/* eslint-disable prettier/prettier */
import type {StyleProp, ViewStyle, TextInputProps} from 'react-native';

export type Props = {
  placeholderInput: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
} & TextInputProps;
