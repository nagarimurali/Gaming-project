import { Fragment } from "react";
import BullEye from "../assets/bulls-eye.webp";
import ThumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface props {
  rating: number;
}

const Emoji = ({ rating }: props) => {
  if (rating < 3) return null;
  const EmojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: ThumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: BullEye, alt: "exceptional", boxSize: "35px" },
  };

  return (
    <Fragment>
      <Image {...EmojiMap[rating]} marginTop={1} />
    </Fragment>
  );
};
export default Emoji;
