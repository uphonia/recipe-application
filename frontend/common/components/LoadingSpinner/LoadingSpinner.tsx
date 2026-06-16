import { CircularProgress } from "@mui/material";

type Props = {
  size?: string | number;
};

export const LoadingSpinner = ({ size }: Props) => (
  <CircularProgress size={size} />
);
