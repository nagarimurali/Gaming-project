import { HStack, Image } from "@chakra-ui/react";
import { Fragment } from "react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <Fragment>
      <HStack padding="10px">
        <Image src={logo} boxSize="60px" />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </Fragment>
  );
};
export default NavBar;
