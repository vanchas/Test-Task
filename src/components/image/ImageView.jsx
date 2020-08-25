import React, { useCallback, useState } from "react";
import s from "./image.module.scss";
import ImageControl from "./ImageControl";
import Tooltip from "../utils/Tooltip";
import Spinner from "../utils/Spinner";
import RemoveButton from "./RemoveButton";

export default function ImageView({ image }) {
	const [loaded, setLoaded] = useState(false);

	const onLoad = useCallback(() => {
		setLoaded(true);
	}, []);

	return (
		<div className={s.image_view}>
			<div className={s.image_holder}>
				{!loaded && <Spinner />}
				<img src={image.url} onLoad={onLoad} alt={image.title} />
				<Tooltip
					text={image.title}
					background={image.background}
					position={image.position}
				/>
			</div>
			<RemoveButton id={image.id} />
			<h2>{image.id}.</h2>
			<dl className={s.tooltip_details}>
				<dt>Tooltip title:</dt> <dd>{image.title}</dd>
				<dt>Tooltip position:</dt> <dd>{image.position}</dd>
				<dt>Tooltip background:</dt> <dd>{image.background}</dd>
			</dl>
			<ImageControl image={image} />
		</div>
	);
}
