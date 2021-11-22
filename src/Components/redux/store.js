import { createStore, applyMiddleware } from "redux";
import { addPresets } from "./reducer/addPresets.reducer";
import logger from "redux-logger";

export const store = createStore(addPresets, applyMiddleware(logger));
