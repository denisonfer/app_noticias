import styled, { css } from 'styled-components/native';

import normalize from '../../utils/normalize';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
  border-radius: 4px;
  border-width: 1px;
  margin-bottom: 7px;
  padding: 0 7px;
  border-color: ${colors.COLOR_RED};

  ${props =>
    props.message &&
    css`
      height: 100px;
      align-items: flex-start;
      justify-content: flex-start;
    `}

  ${props =>
    props.isErrored &&
    css`
      border-color: ${colors.COLOR_RED};
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: ${colors.COLOR_RED};
    `}
`;

export const InputText = styled.TextInput`
  flex: 1;
  color: ${colors.TITLE_COLOR};
  font-size: ${normalize(14)}px;
  margin-left: 7px;

  ${props =>
    props.message &&
    css`
      text-align: left;
      padding: 10px;
    `}
`;

export const ViewError = styled.View`
  width: 100%;
  margin-bottom: 20px;
  padding-left: 10px;
`;

export const Span = styled.Text`
  color: ${colors.COLOR_RED};
`;
