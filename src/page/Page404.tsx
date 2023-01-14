import React, {FC} from "react";
import {Header} from "../components/Header";
import {Link} from "react-router-dom";


export const Page404: FC = () => {
    return(
        <>
            <Header/>
           <div style={{textAlign: "center", fontSize: "55px", marginTop: "40px"}}>Страница не найдена</div>
            <div style={{textAlign: "center", fontSize: "25px", color: "#9F0013", marginTop: "40px"}}><Link to="/">Вернуться на главную страницу</Link></div>

        </>
    )
}