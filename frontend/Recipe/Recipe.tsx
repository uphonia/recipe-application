import EmptyImageStateIcon from "@mui/icons-material/Restaurant";

import { SwitchSelector } from "../common/components/SwitchSelector/SwitchSelector";
import { FavoritedIcon } from "../common/components/FavoritedIcon/FavoritedIcon";
import { Typography } from "../common/components/Typography/Typography";
import { Button } from "../common/components/Button/Button";

import { SWITCHES } from "./recipe.consts";
import {
  Wrapper,
  Card,
  Section,
  Title,
  ImageContainer,
  Image,
  EmptyImage,
  Content,
} from "./recipe.styles";
import { useRecipe } from "./recipe.hooks";

export const Recipe = () => {
  const {
    active,
    handleFavoriteOnClick,
    getContent,
    isLoading,
    recipe,
    setActive,
    subActionText,
  } = useRecipe();

  // TODO - loading state
  if (isLoading) {
    console.warn("loading");
    return;
  }

  // TODO - Empty state
  if (!recipe) {
    console.warn("could not find recipe");
    return;
  }

  return (
    <Wrapper>
      <Card>
        <Section>
          <Title>{recipe.name}</Title>
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
          <Button fluid onClick={handleFavoriteOnClick} variant="secondary">
            <FavoritedIcon isFavorite={recipe.favorited} />
            <Typography variant="body2">{subActionText}</Typography>
          </Button>
        </Section>
        <Section>
          <SwitchSelector
            activeSwitch={active}
            onSelect={setActive}
            switches={Object.values(SWITCHES)}
          />
          <Content dangerouslySetInnerHTML={{ __html: getContent() }} />
        </Section>
      </Card>
    </Wrapper>
  );
};
