import { IconRegularDelete } from '@prism/dropcloth';
import { useState } from 'react';
import ProductButtons from '../Buttons/ProductButtons';
import Sidebar from '../Sidebar';
import EmptyCart from './EmptyCart';
import ShoppingCart from './ShoppingCart';

const ViewCartPage = () => {
	const [cartIsEmpty, setCartIsEmpty] = useState(true);
	const [selectedProduct, setSelectedProduct] = useState(null);

	const handleProductSelect = (product) => {
		setSelectedProduct((prevState) => {
			if (!prevState) {
				return product;
			}
			return {
				...prevState,
				...product,
				container: {
					...prevState.container,
					...product.container,
				},
			};
		});
		setCartIsEmpty(false);
	};


	const handleDelete = () => {
		setSelectedProduct(null);
		setCartIsEmpty(true);
	};

	return (
		<div className='swdc-bg-[#fff] swdc-w-[995px] swdc-mx-auto swdc-pb-6'>
			<div className='swdc-flex swdc-justify-between swdc-max-w-[995px] swdc-mx-auto swdc-align-middle swdc-mb-4 swdc-pb-2 swdc-pt-2 swdc-px-6 swdc-border-b swdc-border-[#e5e5e5]'>
				<h1 className='swdc-text-[28px] swdc-align-middle'>Cart</h1>
				<div className='swdc-w-[60px] swdc-text-center '>
					<IconRegularDelete className='swdc-icon-1 swdc-fill-[#318bd3] swdc-mx-auto' />
					<a
						className='swdc-uppercase swdc-text-[10px] swdc-text-[#318bd3] swdc-text-center swdc-font-bold'
						onClick={handleDelete}>
						Delete
					</a>
				</div>
			</div>
			<ProductButtons onProductSelect={handleProductSelect} />
			{cartIsEmpty ? (
				<EmptyCart />
			) : (
				<div className='swdc-w-full swdc-flex swdc-mx-auto md:swdc-w-[942px]'>
					{!selectedProduct && <div>Loading...</div>}
					<ShoppingCart product={selectedProduct} />
					<Sidebar />
				</div>
			)}
		</div>
	);
};

export default ViewCartPage;
