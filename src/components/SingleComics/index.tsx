import React, {FC} from "react";
import {Link} from "react-router-dom";

import styles from "./style.module.scss";

import {useFormatDateComics, useGetComicsId} from "../../hooks";
import {Loading} from "../Loading/Loading";
import {Result} from "../../types/singleComics.type";

export const SingleComics: FC = () => {
    const {data: response, isLoading, error} = useGetComicsId();
    const content = !(isLoading || error) && response?.data.results.map(comics => <View {...comics} key={comics.id}/>)
    return(
        <>
            {error && <div>Произошла ошибка</div>}
            {isLoading && <Loading/>}
            {content}
        </>
    )
}

const View: FC<Result> = (comics) => {
    const {title, languageContent, pageContent, priceContent, descriptionContent, imageContent} = useFormatDateComics(comics);
    return(
        <div className={styles.grid}>
            <img src={imageContent} alt={title}/>
             <div>
                 <h2>{title}</h2>
                 <p>{descriptionContent}</p>
                 <p>{pageContent}</p>
                 <p>{languageContent}</p>
                 <p className={styles.price}>
                    {priceContent}
                 </p>
             </div>
        <Link to="/comics" className={styles.link}>
                Back to all
        </Link>
        </div>
    )
}