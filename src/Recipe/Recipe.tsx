import React, { useState } from "react";

import { recipeMock, SWITCHES } from "./recipe.consts";
import { Wrapper, Card, Section, Title, Image, Content } from "./recipe.styles";
import { SwitchSelector } from "../common/components/SwitchSelector/SwitchSelector";

export const Recipe = () => {
  const [active, setActive] = useState<string | null>(SWITCHES.INGREDIENTS);
  const content =
    active === SWITCHES.STEPS ? recipeMock.steps : recipeMock.ingredients;

  return (
    <Wrapper>
      <Card>
        <Section>
          <Title>{recipeMock.name}</Title>
          <Image src={recipeMock.image} />
        </Section>
        <Section>
          <SwitchSelector
            activeSwitch={active}
            onSelect={setActive}
            switches={Object.values(SWITCHES)}
          />
          <Content dangerouslySetInnerHTML={{ __html: content }} />
        </Section>
      </Card>
    </Wrapper>
  );
};
