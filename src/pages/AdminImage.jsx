import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../components/utils/Loader";
import ImageView from "../components/image/ImageView";
import ButtonBack from "../components/utils/ButtonBack";
import s from "../components/pages.module.scss";

function AdminImage({ images }) {
	const params = useParams();
	const [image, setImage] = useState(null);

	useEffect(() => {
		if (images && images.length) {
			images.forEach((i) => {
				if (i.id === parseFloat(params.id)) {
					setImage(i);
				}
			});
		}
	}, [images, params.id]);

	return image ? (
		<div className={s.image_page}>
			<ButtonBack />
			<ImageView image={image} />
		</div>
	) : (
		<Loader />
	);
}

const mapStateToProps = (state) => ({
	images: state.admin.images,
});

export default connect(mapStateToProps, null)(AdminImage);
