import { FC } from "react";
import { NavLink } from "react-router-dom";
import { useGetComicsId } from "../../../hooks";
import { Item } from "../../../types/comics.type";

export const ComicsItem: FC<Item> = (comics) => {
  const { handleGetCurrentId, idComics } = useGetComicsId();
  return (
    <li
      onClick={() => handleGetCurrentId(Number(comics.resourceURI.slice(43)))}
    >
      <NavLink to={`/comics/${idComics}`}>{comics.name}</NavLink>
    </li>
  );
};
