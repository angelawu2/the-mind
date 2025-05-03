import React, { useCallback, useContext } from "react";
import { useNavigate } from "react-router";

import { SocketContext } from "../contexts/socketContext";
import LinkButton from "../components/LinkButton";

const Home = () => {
  const navigate = useNavigate();
  const socket = useContext(SocketContext);
  // eslint-disable-next-line no-unused-vars
  const redirect = () => navigate("/");

  const onCreate = useCallback(() => {
    socket.emit("createRoom");
  });
  const onJoin = useCallback();

  return (
    <div className="flex flex-row">
      <LinkButton className="btn btn-outline btn-wide" onClick={onCreate} to="/lobby">Create</LinkButton>
      <LinkButton className="btn btn-outline btn-wide" onClick={onJoin}>Join</LinkButton>
    </div>
  );
};

export default Home;
