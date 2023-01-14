import React, {FC} from 'react';
import {NavLink} from "react-router-dom";
import styles from "./style.module.scss";

export const Header: FC = () => (
        <div className={styles.wrap}>
          <p>
              <NavLink to="/">
                  <span>Marvel </span>
                  information portal
              </NavLink>

          </p>
            <div className={styles.wrap_links}>
                <NavLink to="/" style={({isActive}) => ({color: isActive ? "#9F0013" : "black"})}>
                  Characters
                </NavLink>
                <span>/</span>
                <NavLink to="/comics" style={({isActive}) => ({color: isActive ? "#9F0013" : "black"})}>
                    Comics
                </NavLink>
            </div>
        </div>
    )
