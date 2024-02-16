import { Fragment } from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Fragment>
      <Card>
        <Skeleton height="200px" />
        <CardBody>
          <SkeletonText />
        </CardBody>
      </Card>
    </Fragment>
  );
};
export default GameCardSkeleton;
