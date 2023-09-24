// import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/code-gif.gif";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default navbar;
