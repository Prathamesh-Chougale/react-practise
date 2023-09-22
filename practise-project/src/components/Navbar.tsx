// import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/code-gif.gif";
import ColorModeSwitch from "./ColorModeSwitch";

const navbar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwitch />
    </HStack>
  );
};

export default navbar;
