import React from "react";
import { useNavigate } from "react-router";

const NoRoutePage = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-unused-vars
  const redirect = () => navigate("/");
  return (
    <div>
      {/* <IconButton mr={2} isRound='true' bg='green.300' color='white' icon={<BiArrowBack />} onClick={redirect} /> You're lost. Go home. */}
      <h1>Nothing here.</h1>
    </div>
  );
};

export default NoRoutePage;
