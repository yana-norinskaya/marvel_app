import { FC } from "react";
import { Flex } from "../styles/style";
import {
  SearchForm,
  SelectedCharacter,
  ListCharacters,
  RandomCharacter,
  Header,
} from "../components";

export const MainPage: FC = () => {
  return (
    <>
      <Header />
      <RandomCharacter />
      <Flex align="flex-start">
        <ListCharacters />
        <div>
          <SelectedCharacter />
          <SearchForm />
        </div>
      </Flex>
    </>
  );
};
