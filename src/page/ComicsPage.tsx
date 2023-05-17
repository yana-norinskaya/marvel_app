import { FC } from "react";
import { ListComics, Banner, Header } from "../components";

export const ComicsPage: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <ListComics />
    </>
  );
};
