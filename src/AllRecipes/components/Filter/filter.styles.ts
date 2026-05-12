import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;
  padding: 16px;
  position: sticky;
  top: 0;
  right: 0;
`;

export const SearchBar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: 1px solid black;
  height: 30px;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CheckboxList = styled.div`
  display: flex;
  flex-direction: column;
`;
