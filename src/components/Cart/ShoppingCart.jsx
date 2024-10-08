import { Button } from '@prism/dropcloth';
import { useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const ShoppingCart = () => {
	const [cartIsEmpty, setCartIsEmpty] = useState(true)
	
	return (
		<>
			{cartIsEmpty ? (
				<div
					className='swdc-bg-white swdc-order-[1] md:swdc-flex-shrink-0 md:swdc-w-[calc(72%_-_2rem)] 
					md:swdc-max-w-[calc(72%_-_2rem)]'>
					<div className='swdc-w-full'>
						<div className='swdc-text-center'>
							<h2 className='swdc-font-bold swdc-text-[1.375rem] swdc-mb-4'>
								There are 0 items in your Cart.
							</h2>
							<p className='swdc-mb-4 swdc-w-[300px] swdc-mx-auto swdc-leading-[0.25px]'>
								Items added to the cart will be fulfilled by{' '}
								<span className='swdc-font-bold'>Mentor #701575</span>{' '}
								<Button
									variant='text'
									className='swdc-text-[#0069ae] hover:swdc-text-[#336699] hover:swdc-bg-white swdc-capitalize'>
									Change Store
								</Button>
							</p>
							<Button className='swdc-bg-[#0069ae] hover:swdc-bg-[#336699] swdc-text-sm swdc-capitalize swdc-px-6 swdc-py-2'>
								Continue Shopping
							</Button>
						</div>
					</div>
				</div>
			) : (
				<div
					className='swdc-border swdc-border-[#e5e5e5] swdc-rounded-[10px] swdc-bg-white swdc-order-[1] 
					md:swdc-flex-shrink-0 md:swdc-w-[calc(72%_-_2rem)] md:swdc-max-w-[calc(72%_-_2rem)]'>
					<div className='swdc-w-full'>
						<div className='swdc-bg-[#f6f6f6] swdc-py-2'>
							<p className=' swdc-font-bold swdc-text-sm swdc-ml-2 swdc-text-[#000]'>
								1 Item(s)
							</p>
						</div>
						<ProductCard />
					</div>
				</div>
			)}
		</>
	);
};

export default ShoppingCart;
