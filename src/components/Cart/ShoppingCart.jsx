import ProductCard from './ProductCard/ProductCard';

const ShoppingCart = () => {
	return (
		<div className='swdc-border swdc-border-[#e5e5e5] swdc-rounded-[10px] swdc-bg-white swdc-order-[1] md:swdc-flex-shrink-0 md:swdc-w-[calc(72%_-_2rem)] md:swdc-max-w-[calc(72%_-_2rem)] swdc-mx-0 swdc-px-0'>
			<div className='swdc-w-full'>
				<div className='swdc-bg-[#f6f6f6] swdc-py-2'>
					<p className=' swdc-font-bold swdc-text-sm swdc-ml-2 swdc-text-[#000]'>
						1 Item(s)
					</p>
				</div>
				<ProductCard />
			</div>
		</div>
	);
};

export default ShoppingCart;