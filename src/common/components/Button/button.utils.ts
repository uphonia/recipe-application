import { BUTTON_SIZE, BUTTON_VARIANT } from "./button.type";

export const getBackgroundColor = (variant: BUTTON_VARIANT) => {
  switch (variant) {
    case "primary":
      return "#fc6c05";
    case "secondary":
      return "#f4f4f4";
  }
};

export const getHoverBackgroundColor = (variant: BUTTON_VARIANT) => {
  switch (variant) {
    case "primary":
      return "#e86305";
    case "secondary":
      return "#c9c5c5";
  }
};

export const getHeight = (size: BUTTON_SIZE) => {
  switch (size) {
    case "small":
      return "30px";
    case "medium":
      return "40px";
    case "large":
      return "50px";
    default:
      return "40px";
  }
};

export const getWidth = (size: BUTTON_SIZE) => {
  switch (size) {
    case "small":
      return "50px";
    case "medium":
      return "100px";
    case "large":
      return "150px";
    default:
      return "100px";
  }
};

export const getPadding = (size: BUTTON_SIZE) => {
  switch (size) {
    case "small":
      return "4px";
    case "medium":
      return "8px";
    case "large":
      return "12px";
    default:
      return "8px";
  }
};

export const getFontSize = (size: BUTTON_SIZE) => {
  switch (size) {
    case "small":
      return "12px";
    case "medium":
      return "16px";
    case "large":
      return "24px";
    default:
      return "16px";
  }
};
