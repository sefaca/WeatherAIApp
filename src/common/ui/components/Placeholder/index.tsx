/* eslint-disable prettier/prettier */
import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, TextInputStyled} from './styles';
import type {Props} from './types';

const Placeholder: FC<Props> = ({
  style,
  placeholderInput,
  value,
  onChangeText,
}) => (
  <Container style={style}>
    <TextInputStyled
      placeholder={placeholderInput}
      placeholderTextColor="${({theme}) => theme.colors.tealGreen}"
      value={value}
      onChangeText={onChangeText}
    />
  </Container>
);

export default memo(Placeholder);
