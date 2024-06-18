import '@telegram-apps/telegram-ui/dist/styles.css';

import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';

import "./App.css";

// import WebApp from "@twa-dev/sdk";

export const App = () => {
  return (
    <AppRoot>
      <Placeholder
        header="Title"
        description="Description"
      >
        <img
          alt="Telegram sticker"
          src="https://xelene.me/telegram.gif"
          style={{ display: 'block', width: '144px', height: '144px' }}
        />
      </Placeholder>
    </AppRoot>
  );
};
