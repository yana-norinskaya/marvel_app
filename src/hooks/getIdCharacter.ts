import { useGetCharacterByIdQuery } from "../store/marvel/marvel.api";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

export const useGetIdCharacter = () => {
  const { id } = useAppSelector((state) => state.marvel);
  const { getIdCharacter } = useActions();
  const handleGetCurrentId = (currentId: number) => {
    getIdCharacter(currentId);
  };
  const { data, isLoading, error } = useGetCharacterByIdQuery(id);
  return { handleGetCurrentId, id, data, isLoading, error };
};

export const useRandomCharacter = () => {
  const { randomId } = useAppSelector((state) => state.marvel);
  const { getRandomCharacter } = useActions();
  const handleGetId = () => {
    getRandomCharacter();
  };
  const { data, isLoading, error } = useGetCharacterByIdQuery(randomId);
  return { handleGetId, data, isLoading, error };
};
