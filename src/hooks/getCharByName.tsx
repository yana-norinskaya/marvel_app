import {useAppSelector} from "../hooks/redux";
import {useGetCharByNameQuery} from "../store/marvel/marvel.api";

export const useGetCharByName = () => {
    const {nameChar} = useAppSelector(state => state.marvel);

    const {isError, data, isLoading, error} = useGetCharByNameQuery(nameChar)
    return {isError, data, isLoading, error}
}