import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {marvelActions} from "../store/marvel/marvel.slice";

const actions = {
    ...marvelActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}