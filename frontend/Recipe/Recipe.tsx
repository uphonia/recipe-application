import EmptyImageStateIcon from "@mui/icons-material/Restaurant";
import EditIcon from "@mui/icons-material/Edit";

import { SwitchSelector } from "../common/components/SwitchSelector/SwitchSelector";
import { FavoritedIcon } from "../common/components/FavoritedIcon/FavoritedIcon";
import { Typography } from "../common/components/Typography/Typography";
import { Button } from "../common/components/Button/Button";

import { SWITCHES } from "./recipe.consts";
import {
  Wrapper,
  Card,
  Section,
  Header,
  Title,
  ImageContainer,
  Image,
  ButtonsContainer,
  EmptyImage,
  Content,
} from "./recipe.styles";
import { useRecipe } from "./recipe.hooks";
import { EmptyState } from "./EmptyState";
import { RecipeEditState } from "./RecipeEditState/RecipeEditState";

export const Recipe = () => {
  const {
    activeTab,
    getContent,
    handleFavoriteOnClick,
    isEditState,
    isLoading,
    isOwner,
    recipe,
    refreshRecipe,
    setActiveTab,
    setIsEditState,
    subActionText,
  } = useRecipe();

  // TODO - loading state
  if (isLoading) {
    console.warn("loading");
    return;
  }

  if (!recipe) {
    return <EmptyState />;
  }

  if (isEditState) {
    return (
      <RecipeEditState
        activeTab={activeTab}
        handleExitEditState={() => setIsEditState(false)}
        recipe={recipe}
        refreshRecipe={refreshRecipe}
        setActiveTab={setActiveTab}
      />
    );
  }

  return (
    <Wrapper>
      <Card>
        <Section>
          <Header>
            <Title variant="h4">{recipe.name}</Title>
            <Typography variant="body2">Servings: {recipe.servings}</Typography>
          </Header>
          <ImageContainer>
            {recipe.files?.length ? (
              // TODO - carousel of images
              <Image src={recipe.files[0].fileUrl} />
            ) : (
              <EmptyImage>
                <EmptyImageStateIcon />
                <p>No image provided</p>
              </EmptyImage>
            )}
          </ImageContainer>
          <ButtonsContainer>
            <Button fluid onClick={handleFavoriteOnClick} variant="secondary">
              <FavoritedIcon isFavorite={recipe.favorited} />
              <Typography variant="body2">{subActionText}</Typography>
            </Button>
            {isOwner && (
              <Button
                fluid
                onClick={() => setIsEditState(true)}
                variant="secondary"
              >
                <EditIcon />
                <Typography variant="body2">Edit</Typography>
              </Button>
            )}
          </ButtonsContainer>
        </Section>
        <Section>
          <SwitchSelector
            activeSwitch={activeTab}
            onSelect={setActiveTab}
            switches={Object.values(SWITCHES)}
          />
          <Content dangerouslySetInnerHTML={{ __html: getContent() }} />
        </Section>
      </Card>
    </Wrapper>
  );
};
