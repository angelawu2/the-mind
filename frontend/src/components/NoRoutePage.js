import React from "react";
import { useNavigate } from "react-router-dom";

const NoRoutePage = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const redirect = () => navigate('/')
    return (
        <div>
            {/* <IconButton mr={2} isRound='true' bg='green.300' color='white' icon={<BiArrowBack />} onClick={redirect} /> You're lost. Go home. */}
            Nothing here.
        </div>
    )
};

export default NoRoutePage;
