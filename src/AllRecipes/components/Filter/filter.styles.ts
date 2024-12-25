import styled from "@emotion/styled";

export const Wrapper = styled.div<{ isOpen?: boolean }>`
  background-color: orange;
  border-radius: 8px;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  padding: 8px;
  text-align: center;
`;

export const SelectionWrapper = styled.div`
  background-color: gray;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 16px;
`;

export const ConfirmButton = styled.button`
  border-radius: 0px 0px 8px 8px;
  cursor: pointer;
  padding: 8px;
`;
