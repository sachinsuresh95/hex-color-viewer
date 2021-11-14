import React, { FC } from "react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import StoreProvider from "./Store/StoreProvider";

const engine = new Styletron();

const TestWrapper: FC = ({ children }) => {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <StoreProvider>{children}</StoreProvider>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default TestWrapper;
