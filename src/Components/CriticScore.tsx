import { Fragment } from "react";
import { Badge } from "@chakra-ui/react";

interface props {
  score: number;
}

const CriticScore = ({ score }: props) => {
  let color = score > 75 ? "green" : score > 60 ? "Yellow" : "";
  return (
    <Fragment>
      <Badge
        colorScheme={color}
        fontSize="14px"
        paddingX={2}
        borderRadius="4px"
      >
        {score}
      </Badge>
    </Fragment>
  );
};
export default CriticScore;
