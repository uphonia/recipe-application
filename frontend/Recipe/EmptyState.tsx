import EmptyImageStateIcon from "@mui/icons-material/Restaurant";

import { SwitchSelector } from "../common/components/SwitchSelector/SwitchSelector";
import { Typography } from "../common/components/Typography/Typography";

import { SWITCHES } from "./recipe.consts";
import {
  Wrapper,
  Card,
  Section,
  Title,
  ImageContainer,
  EmptyImage,
  Content,
  Overlay,
} from "./recipe.styles";

export const EmptyState = () => {
  return (
    <Wrapper>
      <Card>
        <Section>
          <Title>[undefined]</Title>
          <ImageContainer>
            <EmptyImage>
              <EmptyImageStateIcon />
              <p>No image provided</p>
            </EmptyImage>
          </ImageContainer>
        </Section>
        <Section>
          <SwitchSelector
            activeSwitch={null}
            onSelect={() => {}}
            switches={Object.values(SWITCHES)}
          />
          <Content>[undefined]</Content>
        </Section>
        <Overlay>
          <Typography variant="body1">
            Unable to fetch recipe. Please try again.
          </Typography>
        </Overlay>
      </Card>
    </Wrapper>
  );
};
