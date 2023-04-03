import styled from '@emotion/styled'

type ButtonProps = {
  isCancel?: boolean;
  isConfirm?: boolean;
  isLarge?: boolean;
};

export const FormButton = styled.button<ButtonProps>`
  align-items: center;  
  display: flex;
  font-size: 16px;
  height: 30px;
  justify-content: center;
  padding: 16px;
  width: ${({ isLarge }) => isLarge ? '100%' : '120px'};
`