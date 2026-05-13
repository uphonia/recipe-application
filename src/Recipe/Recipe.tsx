import { useState } from "react";

import { recipeMock, SWITCHES } from "./recipe.consts";
import { Wrapper, Card, Section, Title, Image, Content } from "./recipe.styles";
import { SwitchSelector } from "../common/components/SwitchSelector/SwitchSelector";
import { FavoritedIcon } from "../common/components/FavoritedIcon/FavoritedIcon";
import { Typography } from "../common/components/Typography/Typography";
import { Button } from "../common/components/Button/Button";

export const Recipe = () => {
  const [active, setActive] = useState<string | null>(SWITCHES.INGREDIENTS);
  const getContent = () => {
    switch (active) {
      case SWITCHES.BLURB:
        return recipeMock.blurb;
      case SWITCHES.INGREDIENTS:
        return recipeMock.ingredients;
      case SWITCHES.STEPS:
        return recipeMock.steps;
      default:
        return recipeMock.blurb;
    }
  };
  const subActionText = `${recipeMock.isFavorited ? "Remove from " : "Add to "} favorites`;

  return (
    <Wrapper>
      <Card>
        <Section>
          <Title>{recipeMock.name}</Title>
          <Image src={recipeMock.image} />
          <Button fluid variant="secondary">
            <FavoritedIcon
              isFavorite={recipeMock.isFavorited}
              onClick={() => {}}
            />
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
