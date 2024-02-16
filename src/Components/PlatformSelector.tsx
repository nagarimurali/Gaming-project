import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Fragment } from "react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../Hooks/usePlatforms";
import { platform } from "../Hooks/useGames";
interface props {
  onSelectPlatform: (platform: platform) => void;
  selectedPlatform: platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: props) => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Fragment>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Fragment>
  );
};
export default PlatformSelector;
