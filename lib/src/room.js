const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ123456789';
const ROOM_ID_LENGTH = 5

const generateNewRoomId = () => {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < ROOM_ID_LENGTH; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const isValidRoomId = (roomId) => {
  const re = new RegExp("^[A-NP-Z1-9]{" + ROOM_ID_LENGTH.toString() + "}$");
  return re.test(roomId);
}

export {
  isValidRoomId,
  generateNewRoomId,
}
