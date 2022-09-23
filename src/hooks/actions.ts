import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { gihubActions } from "../store/github/github.slice";

const actions = {
    ...gihubActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}