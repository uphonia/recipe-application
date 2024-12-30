import React from "react";

import { Layout } from "../common/components/Layout/Layout";
import { Search } from "./components/Search/Search";
import { Sidebar } from "../common/components/SideBar/Sidebar";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Wrapper, RecipeList } from "./allRecipes.styles";

export const AllRecipes = () => {
  return (
    <Layout
      content={
        <Wrapper>
          <Search />
          <RecipeList>
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </RecipeList>
        </Wrapper>
      }
      sidebar={<Sidebar />}
    />
  );
};
