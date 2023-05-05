import React from "react";

const AddProduct = () => {
	return (
		<form className="px-3 needs-validation" action="/add" method="post">
			<select
				className="form-select mb-3"
				aria-label="Default select example"
				name="item_location"
			>
				<option value="Main Office" defaultValue="true">
					Main Office
				</option>
				<option value="Cavea Gallery">Cavea Gallery</option>
				<option value="Cavea Tbilisi Mall">Cavea Tbilisi Mall</option>
				<option value="Cavea East Point">Cavea East Point</option>
				<option value="Cavea East Point">Cavea East Point</option>
				<option value="Cavea City Mall">Cavea City Mall</option>
			</select>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput" className="form-label">
					Item Name
				</label>
				<input
					type="text"
					className="form-control"
					id="formGroupExampleInput"
					placeholder="f.e. Chair"
					name="item_name"
					required
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="formGroupExampleInput2" className="form-label">
					Item Price
				</label>
				<input
					type="number"
					className="form-control"
					id="formGroupExampleInput2"
					placeholder="Another input placeholder"
					name="item_price"
					required
				/>
			</div>
			<div>
				<button className="btn btn-primary" type="submit">
					Submit
				</button>
			</div>
		</form>
	);
};

export default AddProduct;
