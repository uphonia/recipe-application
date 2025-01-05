import React from "react";

import { Layout } from "../common/components/Layout/Layout";
import { Search } from "./components/Search/Search";
import { Sidebar } from "../common/components/SideBar/Sidebar";
import { RecipeCard } from "./components/RecipeCard/RecipeCard";
import { Wrapper, RecipeList } from "./allRecipes.styles";
import { mockData } from "./allRecipes.consts";
import { CreateRecipeForm } from "../CreateRecipeForm/CreateRecipeForm";

export const AllRecipes = () => {
  return (
    <Layout
      content={
        <Wrapper>
          {/*
          <Search />
          <RecipeList>
            {mockData.map((recipe, index) => (
              <RecipeCard
                createdDate={recipe.createdDate}
                image={recipe.image}
                isFavorited={recipe.isFavorited}
                key={index}
                name={recipe.name}
              />
            ))}
          </RecipeList> */}
          <CreateRecipeForm />
        </Wrapper>
      }
      noHeader
      sidebar={<Sidebar />}
    />
  );
};
