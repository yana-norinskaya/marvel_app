import React, { FC } from "react";
import { IResult } from "types/type";
import { useFormatDataCharacters, useGetIdCharacter } from "../../hooks";

export const CharacterItem: FC<IResult> = (character) => {
  const { imageContent, name, id } = useFormatDataCharacters(character);
  const { handleGetCurrentId } = useGetIdCharacter();
  return (
    <li onClick={() => handleGetCurrentId(id)}>
      <img src={imageContent} alt={name} />
      <p>{name}</p>
    </li>
  );
};
