import { useEffect, useState } from 'react';
import ProductQuantity from './ProductQuantity';

const ProductPrice = () => {
	const [quantity, setQuantity] = useState(1);
	const [totalPrice, setTotalPrice] = useState(44.99);

	useEffect(() => {
		const timer = setTimeout(() => {
			const newTotalPrice = quantity * 44.99;
			setTotalPrice(newTotalPrice.toFixed(2));
		}, 1000);

		return () => clearTimeout(timer);
	}, [quantity]);

	return (
		<div className='md:swdc-w-1/2 swdc-mr-4 swdc-pr-5 sm:swdc-pr-3 sm:swdc-mr-1 md:swdc-pr-0 md:swdc-mr-1 lg:swdc-pr-1'>
			<p className='swdc-text-sm'>
				<span className='swdc-text-sm'>Your Price:</span>
				<br />
				<strong>44.99</strong>
			</p>

			<ProductQuantity onChange={(newQuantity) => setQuantity(newQuantity)} />

			<p>
				<span className='swdc-text-sm'>Total:</span>
				<br />
				<strong>${totalPrice}</strong>
			</p>
		</div>
	);
};

export default ProductPrice;
