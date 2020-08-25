import React from "react";
import { useHistory } from "react-router-dom";

export default function ButtonBack() {
	const history = useHistory();

	return <button onClick={history.goBack}>Go Back</button>;
}
