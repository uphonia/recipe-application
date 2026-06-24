import { Typography } from "../../../common/components/Typography/Typography";
import { Wrapper, Container } from "./emptyState.styles";
import { CREATE_RECIPE } from "../../../common/consts/navigation.consts";
import { TextLink } from "../../../common/components/TextLink/TextLink";

export const EmptyState = () => (
  <Wrapper>
    <Container>
      <Typography variant="body1">You have no recipes :(</Typography>
      <Typography variant="body1">
        Start your collection <TextLink href={CREATE_RECIPE} text="here" />!
      </Typography>
    </Container>
  </Wrapper>
);
