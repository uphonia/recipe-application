import { BUTTON_SIZE, BUTTON_VARIANT } from "./button.type";

export const getBackgroundColor = (variant: BUTTON_VARIANT) => {
  switch (variant) {
    case "primary":
      return "#FF7C55";
    case "secondary":
      return "#CDC3B9";
    case "white":
      return "#FFFFFF";
    case "black":
      return "#070D0D";
    default:
      return "#FF7C55";
  }
};

export const getTextColor = (variant: BUTTON_VARIANT) => {
  switch (variant) {
    case "black":
      return "#FFFFFF";
    default:
      return "#000000";
  }
};

export const getHoverBackgroundColor = (variant: BUTTON_VARIANT) => {
  switch (variant) {
    case "primary":
      return "#E56740";
    case "secondary":
      return "#B0A59A";
    case "white":
      return "#F7F6F5";
    case "black":
      return "#28282B";
    default:
      return "#E56740";
  }
};

export const getHeight = (size: BUTTON_SIZE) => {
  switch (size) {
    case "small":
      return "44px";
    case "medium":
      return "50px";
    case "large":
      return "60px";
    default:
      return "44px";
  }
};

export const getFontSize = (size: BUTTON_SIZE) => {
  switch (size) {
    case "small":
      return "16px";
    case "medium":
      return "16px";
    case "large":
      return "24px";
    default:
      return "16px";
  }
};
