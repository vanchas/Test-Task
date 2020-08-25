import React from "react";
import s from "./tooltip.module.scss";

export default function Tooltip({ text, position, background }) {
	return (
		<div className={`${s.tooltip} ${s[position]}`} style={{ background }}>
			{text}
		</div>
	);
}
