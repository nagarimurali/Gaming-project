import { Fragment } from "react";
import { Menu } from "@chakra-ui/react";
import { MenuButton } from "@chakra-ui/react";
import { MenuList } from "@chakra-ui/react";
import { MenuItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: props) => {
  const sortrOders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "popularity" },
    { value: "rating", label: "Average rating" },
  ];
  const currentSortOrder = sortrOders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Fragment>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          orderby:{currentSortOrder?.label || "Relevance"}
        </MenuButton>
        <MenuList>
          {sortrOders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Fragment>
  );
};
export default SortSelector;
