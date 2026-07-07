import DeleteIcon from "@mui/icons-material/Delete";
import FavoritedIcon from "@mui/icons-material/Favorite";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import EmptyImageStateIcon from "@mui/icons-material/Restaurant";

import {
  Wrapper,
  Image,
  EmptyImage,
  Title,
  Text,
  ActionButtons,
  IconButton,
  CardFooter,
  Content,
} from "./recipeCard.styles";

type Props = {
  createdByText: string;
  createdDate: string;
  image?: File;
  isDeletable?: boolean;
  isFavorited: boolean;
  name: string;
  onClick: () => void;
  onDelete: () => void;
  onFavorite: () => void;
};

export const RecipeCard = ({
  createdByText,
  createdDate,
  onDelete,
  onFavorite,
  image,
  isDeletable,
  isFavorited,
  name,
  onClick,
}: Props) => {
  const handleOnDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    onDelete();
  };

  const handleOnFavorite = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    onFavorite();
  };

  return (
    <Wrapper onClick={onClick}>
      {image ? (
        <Image src={image.name} /> // TODO
      ) : (
        <EmptyImage>
          <EmptyImageStateIcon />
        </EmptyImage>
      )}
      <IconButton isOnTop onClick={(e) => handleOnFavorite(e)}>
        {isFavorited ? (
          <FavoritedIcon style={{ color: "#e01126" }} stroke="white" />
        ) : (
          <FavoriteIcon style={{ color: "white" }} />
        )}
      </IconButton>
      <Content>
        <Title>{name}</Title>
        {/* TODO - update design */}
        <ActionButtons>
          {isDeletable && (
            <IconButton onClick={(e) => handleOnDelete(e)}>
              <DeleteIcon />
            </IconButton>
          )}
        </ActionButtons>
        <CardFooter>
          <Text>{createdDate}</Text>
          <Text>Created by {createdByText}</Text>
        </CardFooter>
      </Content>
    </Wrapper>
  );
};
