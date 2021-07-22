import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CenterOnScreen } from "./CenterScreen";
import { HapticButtons } from "./HapticButtons";

function App() {
  return (
    <ChakraProvider>
      <CenterOnScreen>
        <HapticButtons />
      </CenterOnScreen>
    </ChakraProvider>
  );
}

export default App;
