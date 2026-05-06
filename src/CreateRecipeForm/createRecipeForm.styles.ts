import styled from "@emotion/styled";

export const Title = styled.h1``;

export const FormWrapper = styled.div`
  display: flex;
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
  width: 100%;
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
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
