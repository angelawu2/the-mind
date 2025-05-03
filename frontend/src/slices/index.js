import { combineSlices } from "@reduxjs/toolkit";
import roomSlice from "./room";

const rootReducer = combineSlices(roomSlice);

export default rootReducer;
