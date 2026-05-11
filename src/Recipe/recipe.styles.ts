import styled from "@emotion/styled";

export const Wrapper = styled.div`
  padding: 24px;
`;

export const Card = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 1fr 2fr;
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
`;

export const Content = styled.div``;
