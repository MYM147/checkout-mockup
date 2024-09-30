import product from '../../../assets/product.jpg';

const ItemDetails = () => {
	return (
		<div className='swdc-flex swdc-mx-2 md:swdc-w-3/5 md:swdc-max-w-3/5 swdc-mb-2'>
			<div className='md:swdc-mr-[10px] swdc-mr-6'>
				<img
					src={product}
					width={100}
					height={100}
					alt='A picture of a product image'
					className='md:swdc-max-w-24 sm:swdc-w-[100px]'
				/>
			</div>

			<div className='swdc-w-2/4 swdc-max-w-2/4 swdc-min-w-1/2'>
				<h3 className='swdc-font-bold swdc-text-sm'>
					SuperDeck Exterior Waterborne Solid Color Deck Stain
				</h3>
				<p className='swdc-text-xs swdc-my-[10px]'>Sales #: 6509-30746</p>
				<p className='swdc-text-xs swdc-mb-[10px]'>Product #: SD7WW00151</p>
				{/* Conditionally render this based on item features */}
				<dl className='swdc-text-xs swdc-my-[10px] swdc-flex swdc-flex-wrap swdc-flex-row swdc-w-full swdc-text-'>
					<dt className='swdc-w-2/5 swdc-mr-[10px] sm:swdc-pb-1'>
						Container Size:
					</dt>
					<dd className='swdc-w-2/5'>1 Gallon</dd>
					<dt className='swdc-w-2/5 swdc-mr-[10px]'>Base:</dt>
					<dd className='swdc-w-2/5'>Extra White</dd>
				</dl>
			</div>
		</div>
	);
};

export default ItemDetails;
