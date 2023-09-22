// import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/code-gif.gif";

const navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Text>Navbar</Text>
    </HStack>
  );
};

export default navbar;
