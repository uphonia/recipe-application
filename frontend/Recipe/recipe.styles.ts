import styled from "@emotion/styled";
import { Typography } from "../common/components/Typography/Typography";

export const Wrapper = styled.div`
  height: 100vh;
  padding: 24px;
`;

export const Card = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  height: 100%;
  padding: 24px;
  position: relative;
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled(Typography)`
  font-style: italic;
`;

export const Image = styled.img`
  border-radius: 8px;
  height: 100%;
  object-fit: contain;
  width: 100%;
`;

export const Content = styled.div``;

export const ImageContainer = styled.div`
  align-items: center;
  background-color: #f2f0f0;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: 400px;
  width: 100%;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const EmptyImage = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Overlay = styled.div`
  align-items: center;
  background-color: black;
  border: 1px solid black;
  border-radius: 16px;
  color: white;
  display: flex;
  height: 100%;
  justify-content: center;
  opacity: 0.75;
  position: absolute;
  top: 0;
  width: 100%;
`;
