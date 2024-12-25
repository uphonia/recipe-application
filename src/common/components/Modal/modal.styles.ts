import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: orange;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 100vh;
  position: absolute;
  width: 100vw;
  z-index: 0;
`;

export const CloseButton = styled.img`
  height: 30px;
  width: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
`;
