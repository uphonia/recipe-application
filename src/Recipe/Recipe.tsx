import { SWITCHES } from "./recipe.consts";
import { Wrapper, Card, Section, Title, Image, Content } from "./recipe.styles";
import { SwitchSelector } from "../common/components/SwitchSelector/SwitchSelector";
import { FavoritedIcon } from "../common/components/FavoritedIcon/FavoritedIcon";
import { Typography } from "../common/components/Typography/Typography";
import { Button } from "../common/components/Button/Button";
import { useRecipe } from "./recipe.hooks";

export const Recipe = () => {
  const { active, getContent, recipe, setActive, subActionText } = useRecipe();

  // TODO - Empty state
  if (!recipe) {
    console.log("could not find recipe");
    return;
  }

  return (
    <Wrapper>
      <Card>
        <Section>
          <Title>{recipe.name}</Title>
          {recipe.image && <Image src={recipe.image.name} />}
          <Button fluid variant="secondary">
            {/* <FavoritedIcon isFavorite={recipe.isFavorited} /> // TODO */}
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
