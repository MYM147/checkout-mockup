import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ProductQuantity from './ProductQuantity';

const ProductPrice = ({ product }) => {
	const [quantity, setQuantity] = useState(1);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		if (product && typeof product.price === 'number') {
			const newTotalPrice = quantity * product.price;
			setTotalPrice(newTotalPrice.toFixed(2));
		}
	}, [quantity, product]);

	const handleQuantityChange = (newQuantity) => {
		setQuantity(newQuantity);
	};

	if (!product) {
		return <div>Loading product information...</div>;
	}

	return (
		<div className='md:swdc-w-1/2 swdc-mr-4 swdc-pr-5 sm:swdc-pr-3 sm:swdc-mr-1 md:swdc-pr-0 md:swdc-mr-1 lg:swdc-pr-1'>
			<p className='swdc-text-sm'>
				<span className='swdc-text-sm'>Your Price:</span>
				<br />
				<strong>${product.price ? product.price.toFixed(2) : 'N/A'}</strong>
			</p>
			{typeof product.price === 'number' && (
				<ProductQuantity
					onChange={handleQuantityChange}
					price={product.price}
				/>
			)}
			<p>
				<span className='swdc-text-sm'>Total:</span>
				<br />
				<strong>${totalPrice}</strong>
			</p>
		</div>
	);
};

ProductPrice.propTypes = {
	product: PropTypes.shape({
		price: PropTypes.number,
		// Add other product properties if needed
	}),
};

export default ProductPrice;
