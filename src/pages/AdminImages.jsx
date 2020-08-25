import React from "react";
import ImageList from "../components/images-list/ImageList";
import AddImage from "../components/add-image/AddImage";

export default function AdminPage() {
	return (
		<div>
			<AddImage />
			<ImageList />
		</div>
	);
}
