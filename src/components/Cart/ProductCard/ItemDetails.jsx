import product from '../../../assets/product.jpg';

const ItemDetails = () => {
	return (
		<div className='swdc-w-full swdc-flex swdc-px-2 md:swdc-w-2/3 swdc-mb-2'>
			<div className='md:swdc-mr-[10px] swdc-pr-[3.52%] swdc-w-[30%]'>
				<img
					src={product}
					width={100}
					height={100}
					alt='A picture of a product image'
					className='md:swdc-max-w-[100px] swdc-w-full'
				/>
			</div>

			<div className='md:swdc-w-1/2 swdc-w-[70%]'>
				<h3 className='swdc-font-bold md:swdc-text-sm swdc-text-xs'>
					SuperDeck Exterior Waterborne Solid Color Deck Stain
				</h3>
				<p className='swdc-text-[12px] swdc-mt-[10px]'>Sales #: 6509-30746</p>
				<p className='swdc-text-[12px] swdc-mb-[10px]'>Product #: SD7WW00151</p>
				{/* Conditionally render this based on item features */}
				<div className='swdc-grid swdc-grid-cols-2 swdc-gap-x-0 swdc-gap-y-[5px] swdc-items-start'>
					<dt className='swdc-text-xs'>Container Size:</dt>
					<dd className='swdc-text-xs swdc-ml-[-1rem]'>1 Gallon</dd>
					<dt className='swdc-text-xs'>Sheen:</dt>
					<dd className='swdc-text-xs swdc-ml-[-1rem]'>Flat</dd>
					<dt className='swdc-text-xs'>Base:</dt>
					<dd className='swdc-text-xs swdc-ml-[-1rem]'>Extra White</dd>
				</div>
			</div>
		</div>
	);
};

export default ItemDetails;
