import React, {FC} from "react";
import {IResult} from "types/type";
import {useFormatDateCharacters, useGetIdCharacter} from "../../hooks";

export const CharacterItem: FC<IResult> = (character) => {
    const {imageContent, name, id} = useFormatDateCharacters(character);
    const {handleGetCurrentId} = useGetIdCharacter();
    return(
        <li onClick={() => handleGetCurrentId(id)}>
            <img src={imageContent} alt={name}/>
            <p>{name}</p>
        </li>
    )
}