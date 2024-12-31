import styled from "@emotion/styled";
import { mq } from "../../../common/utils/mediaQueries";
import { css } from "@emotion/react";

export const Wrapper = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 180px;
  position: relative;
  width: 100%;

  ${mq.medium(css`
    width: 300px;
  `)}
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: 100%;
  padding: 0px 24px;
  width: 100%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100px;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const Image = styled.img`
  border-radius: 4px;
  height: 120px;
`;

export const CardFooter = styled.div`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #add8e6;
  padding: 4px;
`;

export const Date = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 600;
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const IconButton = styled.button`
  align-items: center;
  background-color: transparent;
  border-radius: 4px;
  display: flex;
  padding: 2px;

  &:hover {
    background-color: #d3d3d3d3;
    cursor: pointer;
  }
`;
