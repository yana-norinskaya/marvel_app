import { FC } from "react";
import { SingleComics, Banner, Header } from "../components";

export const ComicsInfoPage: FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <SingleComics />
    </>
  );
};
