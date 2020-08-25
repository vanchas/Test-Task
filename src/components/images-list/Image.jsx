import React, { useState, useCallback } from "react";
import s from "./images.module.scss";
import { Link } from "react-router-dom";
import Tooltip from "../utils/Tooltip";
import Spinner from "../utils/Spinner";

export default function Image({ image }) {
	const [loaded, setLoaded] = useState(false);

	const onLoad = useCallback(() => {
		setLoaded(true);
	}, []);

	return (
		<li className={s.list_item_image}>
			<Link to={`/images/${image.id}`}>
				<img onLoad={onLoad} alt={image.title} src={image.url} />
				<Tooltip
					text={image.title}
					position={image.position}
					background={image.background}
				/>
			</Link>
			{!loaded && <Spinner />}
		</li>
	);
}
