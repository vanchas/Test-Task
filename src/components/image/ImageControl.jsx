import React, { useState } from "react";
import s from "./image.module.scss";
import { connect } from "react-redux";
import { updateImageDetails } from "../../redux/adminActions.ts";
import { positions, filePickerHandler } from "../utils/imageSchema";
import Success from "../utils/Success";
import Alert from "../utils/Alert";

function ImageControl({ image, updateImageDetails, alert, success }) {
	const [newImage, setNewImage] = useState(image.url);
	const [background, setBackground] = useState(image.background);
	const [text, setText] = useState(image.title);
	const [position, setPosition] = useState(image.position);

	const submitHandler = (e) => {
		e.preventDefault();
		updateImageDetails({
			url: newImage,
			title: text,
			position,
			background,
			id: image.id,
		});
	};

	return (
		<form onSubmit={submitHandler} className={s.image_control}>
			{success && <Success />}
			{alert && <Alert />}

			<fieldset>
				<legend>Update image</legend>
				<label>
					<input
						type="file"
						onChange={(e) => filePickerHandler(e, setNewImage)}
					/>
				</label>
			</fieldset>
			<fieldset>
				<legend>Update tooltip</legend>
				<label>
					Background
					<input
						type="color"
						defaultValue={image.background}
						onChange={(e) => setBackground(e.target.value)}
					/>
				</label>
				<label>
					Text
					<input
						type="text"
						defaultValue={image.title}
						onChange={(e) => setText(e.target.value)}
					/>
				</label>
				<div>Position</div>
				{positions.map((pos, i) => (
					<label key={i}>
						<input
							type="radio"
							name="position"
							value={pos.title.toLowerCase()}
							defaultChecked={image.position === pos.title.toLowerCase()}
							onChange={(e) => setPosition(e.target.value)}
						/>
						{pos.title}
					</label>
				))}
			</fieldset>
			<button type="submit">Save</button>
		</form>
	);
}

const mapStateToProps = (state) => ({
	success: state.admin.success,
	alert: state.admin.alert,
});

const mapDispatchToProps = {
	updateImageDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageControl);
