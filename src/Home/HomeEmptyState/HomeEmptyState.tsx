import React from "react";

import { Link } from "../../components/Link/Link";
import { Wrapper, Header, Subheader, AddIcon } from "./../home.styles";
import { Button } from "../../components/Button/Button";

export const HomeEmptyState = () => {
  return (
    <Wrapper>
      <Header>Welcome!</Header>
      <Subheader>
        There are currently no recipes added. Get started here!
      </Subheader>
      <Link to="/add-recipe">
        <Button isLarge onClick={null}>
          <AddIcon alt="plus" src="./plus.png" /> Add Recipe
        </Button>
      </Link>
    </Wrapper>
  );
};
