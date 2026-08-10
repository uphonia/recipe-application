import { format } from "date-fns";

import { RecipeCard } from "../common/components/RecipeCard/RecipeCard";
import { Filter } from "./components/Filter/Filter";
import { EmptyState } from "./components/EmptyState/EmptyState";

import { Wrapper, RecipeList } from "./allRecipes.styles";
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
  } = useAllRecipes();

  if (!recipes.length) {
    return <EmptyState />;
  }

  if (isLoading) return <LoadingSpinnerLayout />;

  return (
    <>
      <Wrapper>
        <RecipeList>
          {recipes.map((recipe) => {
            const createdDate = format(new Date(recipe.createdAt), "MM/dd/yy");
            return (
              <RecipeCard
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
        <Filter />
      </Wrapper>
    </>
  );
};
