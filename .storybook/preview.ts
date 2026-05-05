import type { Preview } from '@storybook/nextjs-vite'
import React from "react";
import { Global } from "@emotion/react";

import globalStyles from "../src/common/styles/global";

const preview: Preview = {
  decorators: [
    (Story: any) =>
      React.createElement(
        React.Fragment,
        null,
        React.createElement(Global, { styles: globalStyles }),
        React.createElement(Story)
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
      test: 'todo'
    }
  },
};

export default preview;