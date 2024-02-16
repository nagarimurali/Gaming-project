import { platform } from "./useGames";
import useData from "./useData";

interface props {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => useData<platform>("/platforms/lists/parents");

export default usePlatforms;
