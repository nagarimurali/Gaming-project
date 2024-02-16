import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React, { Fragment } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Fragment>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </Fragment>
  );
};
export default ColorModeSwitch;
