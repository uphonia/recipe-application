import React from "react";

import { Wrapper, Header, Subheader, AddButton } from "./home.styles";

export const Home = () => (
  <Wrapper>
    <Header>Welcome!</Header>
    <Subheader>There are currently no recipes added. Get started here!</Subheader>
    <AddButton>Add Recipe</AddButton>
  </Wrapper>
);
