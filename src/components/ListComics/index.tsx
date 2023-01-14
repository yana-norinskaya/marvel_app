import React, {FC, useState} from "react";
import {ComicsItem, Loading} from "../index";

import styles from "./style.module.scss";

import {useGetComicsQuery} from "../../store/marvel/marvel.api";

export const ListComics: FC = () => {
    const [limit, setLimit] = useState(8);
    const {data, isLoading, error} = useGetComicsQuery(limit);
    return (
        <div className={styles.wrap}>
            {isLoading && <Loading />}
            {error && <div>Произошла ошибка</div>}
            <ul>
                {
                    data?.data.results.map((comics) =>
                        <ComicsItem {...comics} key={comics.id}/>
                    )
                }
            </ul>
            <button className={styles.btn}
                    onClick={() => setLimit(limit + 4)}>
                LOAD MORE
            </button>
        </div>
    )
}