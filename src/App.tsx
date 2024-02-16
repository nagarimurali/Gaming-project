import { Fragment, useState } from "react";
import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenereList from "./Components/GenreList";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { platform } from "./Hooks/useGames";
import SortSelector from "./Components/SortSelecter";
import GameHeading from "./Components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Fragment>
      <Grid
        templateAreas={{
          base: `" nav " "main"`,
          lg: `" nav nav" "aside main"`, //1024
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenereList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box>
            <GameHeading gameQuery={gameQuery} />
            <Flex marginBottom={5} paddingLeft={2}>
              <Box marginRight={5}>
                <PlatformSelector
                  selectedPlatform={gameQuery.platform}
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platform })
                  }
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </Fragment>
  );
}

export default App;
