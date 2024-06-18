import "@telegram-apps/telegram-ui/dist/styles.css";

// import { AppRoot, Placeholder } from '@telegram-apps/telegram-ui';
import { SDKProvider } from "@tma.js/sdk-react";
import { Text } from "@telegram-apps/telegram-ui";

// import "./App.css";

// import WebApp from "@twa-dev/sdk";

export const App = () => {
  return (
    <SDKProvider acceptCustomStyles={true}>
      <Text>Hello!</Text>
    </SDKProvider>
  );
};
