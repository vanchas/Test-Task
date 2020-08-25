import React from "react";
import { connect, useDispatch } from "react-redux";
import { HIDE_ALERT } from "../../redux/adminActions.ts";

const styles = {
	inner: {
		color: "#721c24",
		backgroundColor: "#f8d7da",
		borderColor: "#f5c6cb",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		padding: "2rem",
		marginBottom: "1rem",
		border: "1px solid transparent",
		borderRadius: ".25rem",
		zIndex: 1,
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

function Alert({ alert }) {
	const dispatch = useDispatch();

	const closePopUp = () => {
		dispatch({ type: HIDE_ALERT, payload: null });
	};

	return (
		<div style={styles.wrapper} onClick={closePopUp}>
			<div style={styles.inner}>{alert}</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	alert: state.admin.alert,
});

export default connect(mapStateToProps, null)(Alert);
