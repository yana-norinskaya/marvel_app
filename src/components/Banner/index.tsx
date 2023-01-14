import React, {FC} from "react";
import {avengers, avengersLogo}  from "../../assets";
import styles from "./style.module.scss";

export const Banner: FC = () => (
        <div className={styles.wrap}>
            <img src={avengers} alt="avengers"/>
            <p>New comics every week! <br/>
                Stay tuned!</p>
            <img src={avengersLogo} alt="avengersLogo"/>
        </div>
)