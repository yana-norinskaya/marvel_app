import React, {FC, useState} from "react";
import {Button} from "../UI/Button/Button";
import {useFetchCharactersQuery} from "../../store/marvel/marvel.api";
import {Loading, CharacterItem} from "../index";
import styles from "./style.module.scss";

export const ListCharacters: FC = () => {
    const [limit, setLimit] = useState(9);
    const {data: response, isLoading} = useFetchCharactersQuery(limit);
    const renderCharacterItem = response?.data.results.map(character => <CharacterItem {...character}/>)
    return(
        <div>
            {isLoading && <Loading/>}
            <ul className={styles.grid}>
                {renderCharacterItem}
            </ul>
            <Button width="170px"
                    margin="15px auto"
                    onClick={() => setLimit(limit + 3)}>
                LOAD MORE
            </Button>
        </div>
    )
}