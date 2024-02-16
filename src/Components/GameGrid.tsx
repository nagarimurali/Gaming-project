import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import useGames, { platform } from "../Hooks/useGames";
import GameCard from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../App";

export interface props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error}</Text>;
  return (
    <Fragment>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          Skeletons.map((Skeleton) => (
            <GameCardContainer key={Skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </Fragment>
  );
};

export default GameGrid;
