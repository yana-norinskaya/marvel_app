import {useAppSelector} from "../hooks/redux";
import {useActions} from "../hooks/actions";
import {useGetComicsByIdQuery} from "../store/marvel/marvel.api";

export const useGetComicsId = () => {
    const {idComics} = useAppSelector(state => state.marvel);
    const {getComicsId} = useActions();
    const handleGetCurrentId = (currentId: number) => {
        getComicsId(currentId)
    }
    const {data, isLoading, error, isError} = useGetComicsByIdQuery(idComics);
    return {handleGetCurrentId, idComics, data, isLoading, error, isError};
}