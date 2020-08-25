import React, { useState, useEffect } from "react";
import Image from "./Image";
import Loader from "../utils/Loader";
import s from "./images.module.scss";
import { fetchImages } from "../../redux/adminActions";
import { connect } from "react-redux";

function ImageList({ fetchImages, images }) {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (images) {
			setLoading(false);
		} else {
			fetchImages();
		}
	}, [fetchImages, images]);

	return (
		<div>
			{images && images.length ? (
				<ul className={s.images_list}>
					{images.map((image, ind) => (
						<Image key={ind} image={image} />
					))}
				</ul>
			) : loading ? (
				<Loader />
			) : (
				<p className={s.empty_list_message}>There is no one image.</p>
			)}
		</div>
	);
}

const mapStateToProps = (state) => ({
	images: state.admin.images,
});

const mapDispatchToProps = {
	fetchImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageList);
