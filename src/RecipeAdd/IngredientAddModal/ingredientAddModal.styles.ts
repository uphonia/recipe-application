import styled from '@emotion/styled'

export const Overlay = styled.div`
  background-color: rgba(72,72,72, 0.9);;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-top: 100px;
  position: absolute;
  width: 100%;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 100%;
`;

export const Header = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
  width: 100%;
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;
