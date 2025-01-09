import styled from "@emotion/styled";

export const Title = styled.h1``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 60%;
`;

export const Field = styled.div<{ column?: boolean }>`
  display: flex;
  flex-direction: ${({ column }) => (column ? "column" : "row")};
  gap: 8px;
  width: 100%;
`;

export const Label = styled.div`
  display: flex;
  gap: 4px;
  font-size: 16px;
  width: 100%;
`;

export const OptionalNote = styled.p`
  color: gray;
`;

export const Input = styled.input`
  width: 100%;
`;

export const ListWrapper = styled.div`
  padding: 0px 36px;
`;

export const ListInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
`;

export const NewLineButton = styled.button`
  border-radius: 4px;
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

export const FormButton = styled.button<{ isSubmit?: boolean }>`
  border-radius: 4px;
  padding: 8px;
  width: 50px;
`;
