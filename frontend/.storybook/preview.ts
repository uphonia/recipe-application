import type { Preview } from "@storybook/nextjs-vite";
import { Global } from "@emotion/react";
import { createElement, Fragment } from "react";

import globalStyles from "../common/styles/global";

const preview: Preview = {
  decorators: [
    (Story: any) =>
      createElement(
        Fragment,
        null,
        createElement(Global, { styles: globalStyles }),
        createElement(Story),
      ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
