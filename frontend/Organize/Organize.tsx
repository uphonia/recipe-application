import { format } from "date-fns";

import { Wrapper, RecipeList } from "./organize.styles";
import { useOrganize } from "./organize.hooks";
import { createdByWhom } from "../common/utils/createdByWhom";
import { RecipeCard } from "../common/components/RecipeCard/RecipeCard";
import { EmptyState } from "./EmptyState/EmptyState";
import { ConfirmationModal } from "../common/components/ConfirmationModal/ConfirmationModal";

export const Organize = () => {
  const {
    closeModal,
    currentUserId,
    handleDeleteConfirm,
    handleDeleteOnClick,
    handleFavoriteOnClick,
    handleOnClick,
    isModalOpen,
    recipes,
  } = useOrganize();

  if (!recipes.length) {
    return <EmptyState />;
  }

  return (
    <>
      <Wrapper>
        <RecipeList>
          {recipes.map((recipe) => {
            const createdDate = format(new Date(recipe.createdAt), "MM/dd/yy");
            const allowDelete = recipe.createdBy === currentUserId;
            return (
              <RecipeCard
                createdByText={createdByWhom(recipe.createdBy, currentUserId)}
                createdDate={createdDate}
                imageUrl={recipe.fileUrl}
                isDeletable={allowDelete}
                isFavorited={recipe.favorited}
                key={recipe.id}
                name={recipe.name}
                onClick={() => handleOnClick(recipe.id)}
                onDelete={() => handleDeleteOnClick(recipe.id)}
                onFavorite={() => handleFavoriteOnClick(recipe.id)}
              />
            );
          })}
        </RecipeList>
        <ConfirmationModal
          closeModal={closeModal}
          description="Do you want to delete this recipe?"
          isOpen={isModalOpen}
          onConfirm={handleDeleteConfirm}
          onConfirmText="Delete"
          title="Delete"
        />
      </Wrapper>
    </>
  );
};
