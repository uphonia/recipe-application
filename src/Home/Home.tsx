import React from "react";
import { Link } from "react-router-dom";

import { Wrapper, Header, Subheader, AddButton } from "./home.styles";

export const Home = () => {
  return (
    <Wrapper>
      <Header>Welcome!</Header>
      <Subheader>
        There are currently no recipes added. Get started here!
      </Subheader>
      <Link to="/add-recipe">
        <AddButton>Add Recipe</AddButton>
      </Link>
    </Wrapper>
  );
};
