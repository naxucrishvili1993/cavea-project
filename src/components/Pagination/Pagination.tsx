import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import {
	decrement,
	increment,
	setActivePageIndex,
} from "../Store/Features/pageSlice";

const Pagination = () => {
	const items = useSelector(
		(store: RootState) => store.inventoryReducer.inventories[0],
	);
	const activePageIndex = useSelector(
		(store: RootState) => store.pageReducer.activePageIndex,
	);
	const dispatch = useDispatch();

	const itemsLengthRef = useRef<number>(0);
	if (Array.isArray(items)) itemsLengthRef.current = items.length;
	// Math.ceil მეთოდის დახმარებით ვსაზღვრავთ გამოსატანი ღილაკების რაოდენობას.
	const paginationButtonsLength = Math.ceil(itemsLengthRef.current / 20);

	return (
		<>
			<div className="d-flex flex-column flex-md-row flex-xs-column align-items-center justify-content-center my-3">
				<div>
					<button
						className="btn btn-secondary"
						onClick={() => {
							activePageIndex > 1 && dispatch(decrement());
						}}
					>
						Previous
					</button>
					{[...Array(paginationButtonsLength)].map(
						// ვარენდერებთ ღილაკებს მონაცემების რაოდენობაზე დაყრდნობით.
						(el, index) => (
							<button
								className="btn btn-secondary"
								key={index}
								onClick={() => {
									dispatch(setActivePageIndex(Number(index + 1)));
								}}
							>
								{index + 1}
							</button>
						),
					)}
					<button
						className="btn btn-secondary"
						onClick={() => dispatch(increment())}
					>
						Next
					</button>
				</div>
				<div>
					<p>Total number of items: {itemsLengthRef.current}</p>
				</div>
			</div>
		</>
	);
};

export default Pagination;
