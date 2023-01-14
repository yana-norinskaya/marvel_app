import React, {FC} from "react";
import {theme} from "../../styles/style";
import shield from "../../assets/shield.svg";
import mjolnir from "../../assets/mjolnir.svg";

import styles from "./style.module.scss";
import {Button} from "../UI/Button/Button";
import {useRandomCharacter} from "../../hooks/getIdCharacter";
import {Loading} from "../Loading/Loading";
import {IResult} from "../../types/type";


export const RandomCharacter: FC = () => {
    const {data: response, isLoading, handleGetId, error} = useRandomCharacter();
    const errorMessage = error && <div>Упс, что-то пошло не так</div>;
    const spinner = isLoading && <Loading/>;
    const content = !(isLoading || error) && response?.data.results.map((char) => <View {...char}/>);
    return (
        <div className={styles.wrapper}>
            {errorMessage}
            {spinner}
            {content}
          <div className={styles.random}>
                <p>Random character for today! <br/>
                    Do you want to get to know him better?
                </p>
              <p>Or choose another one</p>
              <Button onClick={handleGetId}>TRY IT</Button>
              <img src={shield} alt="shield"/>
              <img src={mjolnir} alt="mjolnir" className={styles.decoration}/>
          </div>
    </div>
    )
}

const View: FC<IResult> = (char) => {
    const {thumbnail, name, description, urls} = char;
    const contentDescription = description.length ? `${description.slice(0, 210)}...` : 'There is no description for this character';
    return(
            <>
                <div className={styles.block}>
                    <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={name}/>
                    <div className={styles.wrap_block}>
                        <p>{name}</p>
                        <p>{contentDescription}</p>
                        <div className={styles.wrap_btn}>
                            <Button width="101px">
                                <a href={urls[0].url}>HOMEPAGE</a>
                            </Button>
                            <Button width="101px" background={theme.colors.grey}>
                                <a href={urls[1].url}>WIKI</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
}

export default RandomCharacter;