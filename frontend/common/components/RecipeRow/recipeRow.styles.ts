import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { mq } from "../../utils/mediaQueries";

export const Wrapper = styled.div`
  background-color: #f2f0f0;
  border: 1px solid black;
  border-bottom: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 12px;
  position: relative;
  width: 100%;

  &:first-of-type {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-of-type {
    border-bottom: 1px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`;

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  line-clamp: 3;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const CardFooter = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 4px;
  margin-left: auto;
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
