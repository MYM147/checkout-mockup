// ItemDetails.js
import PropTypes from 'prop-types';

const ItemDetails = ({ product }) => {
	return (
		<div className='swdc-w-full swdc-flex swdc-px-1 md:swdc-w-8/12 swdc-mb-2'>
			{product && (
				<>
					<div className='md:swdc-mr-[5px] swdc-pr-[3%] swdc-w-[28%]'>
						<img
							src={product.image}
							width={92}
							height={92}
							alt={`An image of a paint can product made by ${product.name}`}
							className='md:swdc-max-w-[92px] swdc-w-full'
						/>
					</div>

					<div className='swdc-w-[70%]'>
						<h3 className='swdc-font-bold md:swdc-text-sm swdc-text-xs'>
							{product.name || 'Unknown Product'}
						</h3>
						<p className='swdc-text-[12px] swdc-mt-[10px]'>
							Sales #: {product.salesNumber || 'N/A'}
						</p>
						<p className='swdc-text-[12px] swdc-mb-[10px]'>
							Product #: {product.productNumber || 'N/A'}
						</p>

						<div className='swdc-grid swdc-grid-cols-2 swdc-gap-x-0 swdc-gap-y-[5px] swdc-items-start'>
							<dt className='swdc-text-xs'>Container Size:</dt>
							<dd className='swdc-text-xs swdc-ml-[-1rem]'>
								{product.container?.size || 'N/A'}
							</dd>
							<dt className='swdc-text-xs'>Sheen:</dt>
							<dd className='swdc-text-xs swdc-ml-[-1rem]'>
								{product.container?.sheen || 'N/A'}
							</dd>
							<dt className='swdc-text-xs'>Base:</dt>
							<dd className='swdc-text-xs swdc-ml-[-1rem]'>
								{product.container?.base || 'N/A'}
							</dd>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

ItemDetails.propTypes = {
	product: PropTypes.shape({
		name: PropTypes.string,
		image: PropTypes.string,
		price: PropTypes.number,
		salesNumber: PropTypes.string,
		productNumber: PropTypes.string,
		container: PropTypes.shape({
			size: PropTypes.string,
			sheen: PropTypes.string,
			base: PropTypes.string,
		}),
	}).isRequired,
};

export default ItemDetails;
