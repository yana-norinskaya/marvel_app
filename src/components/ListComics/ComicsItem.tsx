import React, {FC} from "react";
import {Result} from "types/comics.type";
import {Link} from "react-router-dom";
import styles from "./style.module.scss";

import {useFormatDateComics, useGetComicsId} from "../../hooks";

export const ComicsItem: FC<Result> = (comics) => {
    const {imageContent, id, priceContent, title} = useFormatDateComics(comics);
    const {handleGetCurrentId} = useGetComicsId()

    return (
        <li onClick={() => handleGetCurrentId(id)}>
            <Link to={`/comics/${id}`}>
            <img src={imageContent} alt={title}/>
            <p className={styles.name}>{title}</p>
                <p className={styles.price}>
                    {priceContent}
                </p>
            </Link>
        </li>
    )
}