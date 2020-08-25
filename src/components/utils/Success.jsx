import React from "react";
import { connect, useDispatch } from "react-redux";
import { HIDE_SUCCESS } from "../../redux/adminActions.ts";

const styles = {
	inner: {
		color: "#155724",
		backgroundColor: "#d4edda",
		borderColor: "#c3e6cb",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "2rem",
		marginBottom: "1rem",
		border: "1px solid transparent",
		borderRadius: ".25rem",
		zIndex: 2,
	},
	wrapper: {
		position: "fixed",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0, 0, 0, .5)",
		zIndex: 1,
	},
};

function Success({ success }) {
	const dispatch = useDispatch();

	const closePopUp = () => {
		dispatch({ type: HIDE_SUCCESS, payload: null });
	};

	return (
		<div style={styles.wrapper} onClick={closePopUp}>
			<div style={styles.inner}>{success}</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	success: state.admin.success,
});

export default connect(mapStateToProps, null)(Success);
