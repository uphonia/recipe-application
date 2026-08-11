import { format } from "date-fns";

import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";

import { Filter } from "./components/Filter/Filter";
import { EmptyState } from "./components/EmptyState/EmptyState";

import {
  Wrapper,
  RecipeListWrapper,
  RecipeList,
  ToggleViewContainer,
  ToggleViewDivider,
  Toggle,
} from "./allRecipes.styles";
import { useAllRecipes } from "./allRecipes.hooks";
import { createdByWhom } from "../common/utils/createdByWhom";
import { LoadingSpinnerLayout } from "../common/components/LoadingSpinnerLayout/LoadingSpinnerLayout";

export const AllRecipes = () => {
  const {
    currentUserId,
    handleFavoriteOnClick,
    handleOnClick,
    isLoading,
    recipes,
    setToggleView,
    toggleView,
    RecipeItemComponent,
  } = useAllRecipes();

  if (!recipes.length) {
    return <EmptyState />;
  }

  if (isLoading) return <LoadingSpinnerLayout />;

  return (
    <Wrapper>
      <RecipeListWrapper>
        <ToggleViewContainer>
          <Toggle
            active={toggleView === "grid"}
            onClick={() => setToggleView("grid")}
          >
            <GridViewIcon /> Grid
          </Toggle>
          <Toggle
            active={toggleView === "list"}
            onClick={() => setToggleView("list")}
          >
            <ViewListIcon /> List
          </Toggle>
        </ToggleViewContainer>
        <RecipeList toggleView={toggleView}>
          {recipes.map((recipe) => {
            const createdDate = format(new Date(recipe.createdAt), "MM/dd/yy");
            return (
              <RecipeItemComponent
                createdByText={createdByWhom(recipe.createdBy, currentUserId)}
                createdDate={createdDate}
                imageUrl={recipe.fileUrl}
                isFavorited={recipe.favorited}
                key={recipe.id}
                name={recipe.name}
                onClick={() => handleOnClick(recipe.id)}
                onFavorite={() => handleFavoriteOnClick(recipe.id)}
              />
            );
          })}
        </RecipeList>
      </RecipeListWrapper>
      <Filter />
    </Wrapper>
  );
};
