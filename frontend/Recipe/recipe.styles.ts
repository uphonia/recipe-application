import styled from "@emotion/styled";

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
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
`;

export const Title = styled.h1`
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

export const EmptyImage = styled.div`
  align-items: center;
  display: flex;
  gap: 8px;
  flex-direction: column;
`;
