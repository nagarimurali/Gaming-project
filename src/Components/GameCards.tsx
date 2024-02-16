import { Fragment } from "react";
import { Game } from "../Hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformiconList from "./PlatformiconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../Services/image-Url";
import Emoji from "../Components/Emoji";
interface props {
  game: Game;
}

const GameCard = ({ game }: props) => {
  return (
    <Fragment>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformiconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl" textAlign={"left"}>
            {game.name}
            <Emoji rating={game.rating_top} />
          </Heading>
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default GameCard;
