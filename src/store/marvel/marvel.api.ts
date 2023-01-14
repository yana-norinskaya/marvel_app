import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IResult, IRootObject} from "../../types/type";
import {IMainObject} from "types/comics.type";
import {ISingleComics} from "types/singleComics.type";

export const marvelApi = createApi({
    reducerPath: 'marvel/api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://gateway.marvel.com:443/v1/public",
    }),
    endpoints: build => ({
    fetchCharacters: build.query<IRootObject, number>({
        query: (limit: number) => ({
            url: `/characters?limit=${limit}&offset=210&apikey=401a45d4f4dae2969e8428ff9dbd5ec9`,
        })
    }),
        getCharacterById: build.query<IRootObject, number>({
            query: (id: number) => ({
                url: `/characters/${id}?apikey=401a45d4f4dae2969e8428ff9dbd5ec9`,
                params: {
                    q: id
                },
            })
        }),
        getComics: build.query<IMainObject, number>({
            query: (limit) => ({
                url: `/comics?limit=${limit}&offset=20&apikey=401a45d4f4dae2969e8428ff9dbd5ec9`
            })
        }),
        getComicsById: build.query<ISingleComics, number>({
            query: (id: number) => ({
                url: `/comics/${id}?apikey=401a45d4f4dae2969e8428ff9dbd5ec9`
            })
        }),
        getCharByName: build.query<IRootObject, string>({
            query: (name: string) => ({
            url: `/characters?name=${name}&apikey=401a45d4f4dae2969e8428ff9dbd5ec9`
        })
        })
})
})

export const {useFetchCharactersQuery, useGetCharacterByIdQuery, useGetComicsQuery, useGetComicsByIdQuery, useGetCharByNameQuery} = marvelApi