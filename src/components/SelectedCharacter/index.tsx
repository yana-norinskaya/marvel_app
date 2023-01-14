import React, {FC} from "react";
import {theme} from "../../styles/style";
import {Button} from "../UI/Button/Button";
import {Loading, Skeleton} from "../index";
import styles from "./style.module.scss";
import {IResult} from "../../types/type";
import {useFormatDateCharacters, useGetIdCharacter} from "../../hooks";
import {ComicsItem} from "../UI/ItemComics/ComicsItem";

export const SelectedCharacter: FC = () => {
    const {data: response, isLoading, id, error} = useGetIdCharacter();
    const content = !(isLoading || error) && response?.data.results.map(char => <View {...char}/>)
     return(
        <div className={styles.wrapper}>
            {!id && <Skeleton/>}
            {isLoading && <Loading/>}
            {content}
        </div>
    )
}
const View: FC<IResult> = (char) => {
    const {name, urls, descriptionContent, imageContent, comics} = useFormatDateCharacters(char);
    return(
        <>
            <div className={styles.info}>
                <img src={imageContent} alt={name}/>
                <div>
                    <p className={styles.name}>
                        {name}
                    </p>
                    <Button margin="15px 0">
                        <a href={urls[0].url}>HOMEPAGE</a>
                    </Button>
                    <Button background={theme.colors.grey}>
                        <a href={urls[1].url}>WIKI</a>
                    </Button>
                </div>
            </div>
            <p className={styles.descr}>
                {descriptionContent}</p>
            <p className={styles.comics}>Comics:</p>
            <ul>
                {comics.items.length > 0 ? comics.items.map(comics => <ComicsItem {...comics} key={comics.name}/>)
                    : <div>No information about comics</div>
                }
            </ul>
       </>
    )
}