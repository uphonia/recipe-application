import React from "react";

import {
  Wrapper,
  Info,
  Image,
  Date,
  ActionButtons,
  IconButton,
} from "./recipeCard.styles";

export const RecipeCard = () => (
  <Wrapper>
    <ActionButtons></ActionButtons>
    <Info>
      <h3>Croque Monsiuer</h3>
      <h6>40min</h6>
    </Info>
    <Image />
    <Date>Date created here</Date>
  </Wrapper>
);
