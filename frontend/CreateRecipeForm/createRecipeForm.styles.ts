import styled from "@emotion/styled";

export const Title = styled.h1``;

export const Main = styled.div`
  position: relative;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  width: 60%;
`;

export const Label = styled.label`
  display: flex;
  gap: 4px;
  font-size: 16px;
  width: 30%;
`;

export const OptionalNote = styled.span`
  color: gray;
`;

export const Input = styled.input`
  border: 1px solid black;
  height: 30px;
  padding: 0 8px;
`;

export const Divider = styled.div`
  border-top: 1px solid black;
`;

export const TextArea = styled.textarea`
  height: 150px;
  width: 100%;
`;

export const FileInput = styled.input`
  width: 100%;
`;

export const Footer = styled.div`
  background-color: #d6a577;
  border-top: 2px solid #574b40;
  bottom: 0;
  margin-left: auto;
  overflow: hidden;
  padding: 16px;
  position: sticky;
  z-index: 1;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: red;
`;
