import { Heading } from "@chakra-ui/react";
import { Fragment } from "react";
import { GameQuery } from "../App";

interface props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Fragment>
      <Heading
        as="h1"
        marginY={5}
        fontSize="5xl"
        textAlign={"left"}
        paddingLeft={2}
      >
        {heading}
      </Heading>
    </Fragment>
  );
};
export default GameHeading;
