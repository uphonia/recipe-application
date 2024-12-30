import styled from "@emotion/styled";

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  height: 160px;
  justify-content: space-between;
  padding: 24px;
  pointer: cursor;
  position: relative;
  width: 280px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Image = styled.img`
  height: 100%;
`;

export const Date = styled.p`
  bottom: 4px;
  color: gray;
  font-size: 16px;
  left: 8px;
  position: absolute;
`;

export const ActionButtons = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

export const IconButton = styled.img`
  height: 16px;
  width: 16px;
`;
