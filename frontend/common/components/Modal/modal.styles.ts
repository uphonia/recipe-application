import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: auto;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
`;

export const Header = styled.div`
  align-items: center;
  background-color: #f5dab8;
  box-sizing: border-box;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex: 0 0 40px;
  height: 40px;
  justify-content: space-between;
  padding: 8px 16px;
`;

export const Content = styled.div`
  flex: 1 1 auto;
  height: auto;
  min-height: 0;
  padding: 24px;
  width: 100%;
`;

export const CloseButton = styled.button`
  height: 30px;
  width: 30px;
`;
