import styled from '@emotion/styled'

export const Wrapper = styled.div`
  background-color: #559A90;
  height: 100vh;
`

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px 50px;
`;

export const Form = styled.form`
  margin-top: 20px;
  width: 100%;
`

export const Header = styled.h1``;

export const Section = styled.div<{column?: boolean}>`
  align-items: ${({ column }) => column ? 'normal' : 'center'};
  display: flex;
  flex-direction: ${({ column }) => column ? 'column' : 'row'};
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const Label = styled.p`
  
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const AddButton = styled.button``;

export const FormButton = styled.button`

`;