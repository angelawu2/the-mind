import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";

const LinkButton = ({
	to,
	onClick,
	children,
	...rest
}) => {
	const navigate = useNavigate();

	return (
		<button
			{...rest}
			onClick={(event) => {
				onClick && onClick(event);
				navigate(to);
			}}
		>
			{children}
		</button>
	)
};

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};

export default LinkButton;