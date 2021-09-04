import React, {
  useEffect,
  useCallback,
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { Icon } from 'react-native-elements';
import { useField } from '@unform/core';

import colors from '../../constants/colors';

import { Container, InputText, ViewError, Span } from './styles';

const Input = (
  { name, icon, message, label, onChangeText, ...rest },
  ref
) => {
  const { registerField, fieldName, defaultValue, error } = useField(name);

  const inputRef = useRef(null);
  const inputValueRef = useRef({ value: defaultValue });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocused = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputFilled = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  useEffect(() => {
    inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (inputRef.current) return inputRef.current.value;
        return '';
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: '' });
          inputRef.current.value = '';
        }
      },
    });
  }, [fieldName, registerField]);

  const handleChangeText = useCallback(
    text => {
      if (inputRef.current) inputRef.current.value = text;
      if (onChangeText) onChangeText(text);
    },
    [onChangeText],
  );


  return (
    <>
      {message ? (
        <Container isFocused={isFocused} isErrored={!!error} message={message}>
          <InputText
            ref={inputRef}
            message={message}
            multiline
            underlineColorAndroid="transparent"
            keyboardAppearance="dark"
            defaultValue={defaultValue}
            placeholderTextColor={colors.SUBTITLE_COLOR}
            onFocus={handleInputFocused}
            onBlur={handleInputFilled}
            onChangeText={handleChangeText}
            {...rest}
          />
        </Container>
      ) : (
        <Container isFocused={isFocused} isErrored={!!error}>
          <Icon
            name={icon}
            type="material-community"
            color={
              isFocused || isFilled
                ? colors.COLOR_RED
                : colors.COLOR_RED
            }
            size={26}
          />
          <InputText
            ref={inputRef}
            keyboardAppearance="dark"
            defaultValue={defaultValue}
            placeholderTextColor={colors.SUBTITLE_COLOR}
            onFocus={handleInputFocused}
            onBlur={handleInputFilled}
            onChangeText={handleChangeText}
            {...rest}
          />
        </Container>
      )}

      {error && (
        <ViewError>
          <Span>{error}</Span>
        </ViewError>
      )}
    </>
  );
};

export default forwardRef(Input);
