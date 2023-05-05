const Inventory = (props: {
	item_name: string;
	item_price: number;
	item_location: string;
	item_id: number;
}) => {
	return (
		<div className="row align-items-center mt-3 border p-2">
			<div className="col">{props.item_name}</div>
			<div className="col">{props.item_price}₾</div>
			<div className="col">{props.item_location}</div>
			<div className="col text-end">
				<a href={`http://localhost:5000/inventories/${props.item_id}`}>
					<button className="btn btn-danger">Delete</button>
				</a>
			</div>
		</div>
	);
};

export default Inventory;
