import styled from '@emotion/styled'

type ButtonProps = {
  isCancel?: boolean;
  isConfirm?: boolean;
  isLarge?: boolean;
};

export const FormButton = styled.button<ButtonProps>`
  align-items: center;  
  display: flex;
  height: 30px;
  justify-content: center;
  width: ${({ isLarge }) => isLarge ? '100%' : '120px'};
`