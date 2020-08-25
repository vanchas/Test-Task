import React, { useState } from "react";
import s from "./add-image.module.scss";
import { addNewImage } from "../../redux/adminActions.ts";
import { positions, filePickerHandler } from "../utils/imageSchema";
import { connect } from "react-redux";
import Success from "../utils/Success";
import Alert from "../utils/Alert";

function AddImage({ addNewImage, success, alert }) {
	const [image, setImage] = useState(null);
	const [title, setTitle] = useState("");
	const [color, setColor] = useState("");
	const [position, setPosition] = useState("");
	const [showForm, setShowForm] = useState(false);

	const submitHandler = async (e) => {
		e.preventDefault();
		await addNewImage({
			id: Date.now(),
			url: image,
			title,
			background: color || "#999999",
			position,
		});
		setTitle("");
		setImage(null);
		setColor("");
		setPosition("");
		setShowForm(false);
	};

	return (
		<div className={s.add_new_image}>
			{success && <Success />}
			{alert && <Alert />}

			<button onClick={() => setShowForm(!showForm)}>
				{showForm ? "Hide form" : "Add new image"}
			</button>

			{showForm && (
				<form onSubmit={submitHandler}>
					<label>
						Image
						<input
							type="file"
							required
							onChange={(e) => filePickerHandler(e, setImage)}
						/>
					</label>
					<label>
						Title
						<input
							type="text"
							required
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<label>
						Color
						<input onChange={(e) => setColor(e.target.value)} type="color" />
					</label>
					<fieldset>
						<legend>Position</legend>
						{positions.map((p, i) => (
							<label key={i}>
								{p.title}
								<input
									type="radio"
									name="position"
									required
									value={p.title.toLowerCase()}
									onChange={(e) => setPosition(e.target.value)}
								/>
							</label>
						))}
					</fieldset>
					<button type="submit">Save</button>
				</form>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	success: state.admin.success,
	alert: state.admin.alert,
});

const mapDispatchToProps = {
	addNewImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddImage);
