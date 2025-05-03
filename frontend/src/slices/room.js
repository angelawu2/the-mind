import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentRoomId: "",
  gameInProgress: undefined,
};

// room logic:
// - user can only be in ONE room at a time
// - navigating to a room link will NOT automatically add user to a room
// - to enter a room user must either CREATE or JOIN a room from the home page,
//   communicating with the server (socket connection, user id, username, etc.)

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {
    roomJoined: (state, { payload }) => {
      const { roomId, gameInProgress } = payload;
      state.currentRoomId = roomId;
      state.gameInProgress = gameInProgress;
    },
    roomCreated: (state, { payload }) => {
      state.currentRoomId = payload.roomId;
      state.gameInProgress = false;
    },
    roomLeft: () => initialState,
  },
  selectors: {
    // currentRoomId
    // gameInProgress
  },
});

export default roomSlice;
