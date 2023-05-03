import React from "react";

const Inventory = (props: {
	name: string;
	price: number;
	location: string;
	id: number;
}) => {
	return (
		<div className="row align-items-center">
			<div className="col">{props.name}</div>
			<div className="col">{props.price}</div>
			<div className="col">{props.location}</div>
			<div className="col text-end">
				<a href={`./inventories/${props.id}`}>
					<button className="btn btn-danger">Delete</button>
				</a>
			</div>
		</div>
	);
};

export default Inventory;
