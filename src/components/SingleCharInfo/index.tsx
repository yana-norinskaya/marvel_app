import { FC } from "react";

import { useGetCharByName, useFormatDataCharacters } from "../../hooks";
import { Loading } from "../index";

import styles from "./style.module.scss";

import { IResult } from "../../types/type";

export const SingleCharInfo: FC = () => {
  const { data: response, error, isLoading } = useGetCharByName();
  const content = response?.data.results.map((char) => <View {...char} />);
  return (
    <div className={styles.wrap}>
      {error && <div>Произошла ошибка</div>}
      {isLoading && <Loading />}
      {content}
    </div>
  );
};
const View: FC<IResult> = (char) => {
  const { name, descriptionContent, imageContent } =
    useFormatDataCharacters(char);
  return (
    <>
      <img src={imageContent} alt={name} />
      <div>
        <p className={styles.name}>{name}</p>
        <p className={styles.descr}>{descriptionContent}</p>
      </div>
    </>
  );
};
