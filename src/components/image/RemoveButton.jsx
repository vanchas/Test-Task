import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { REMOVE_IMAGE } from "../../redux/adminActions";

export default function RemoveButton({ id }) {
	const dispatch = useDispatch();
	const history = useHistory();

	const removeImageHandler = () => {
		const resolver = window.confirm(
			"Are you sure, that you want to delete the image?"
		);
		if (resolver) {
			dispatch({ type: REMOVE_IMAGE, payload: id });
			history.push("/");
		}
	};
	return <button onClick={removeImageHandler}>Remove image</button>;
}
