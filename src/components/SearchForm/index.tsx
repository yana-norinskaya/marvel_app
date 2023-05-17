import { FC } from "react";
import styles from "./style.module.scss";
import { Button } from "../UI/Button/Button";
import { Flex } from "../../styles/style";
import { SubmitHandler, useForm } from "react-hook-form";
import { useGetCharByName, useActions } from "../../hooks";
import { Link } from "react-router-dom";

interface IName {
  name: string;
}
export const SearchForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IName>();
  const { getName } = useActions();
  const { data: char } = useGetCharByName();

  const onSubmit: SubmitHandler<IName> = (data) => {
    reset();
    getName(data.name);
  };

  const result = !char?.data.results ? null : char?.data.results.length > 0 ? (
    <Flex justify="space-between" align="center">
      <p
        className={styles.success}
      >{`There is! Visit ${char?.data.results[0].name} page?`}</p>
      <Button>
        <Link to={`/characters/${char?.data.results[0].id}`}>To page</Link>
      </Button>
    </Flex>
  ) : (
    <p className={styles.error}>
      The character was not found. Check the name and try again
    </p>
  );
  return (
    <div className={styles.form}>
      <p>Or find a character by name:</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex align="center" justify="space-between">
          <input
            {...register("name", {
              required: "This field is required",
            })}
            type="text"
            placeholder="Enter name"
          />
          <Button>Find</Button>
        </Flex>
      </form>
      {errors?.name ? (
        <p className={styles.error}>{errors.name.message}</p>
      ) : (
        result
      )}
    </div>
  );
};
