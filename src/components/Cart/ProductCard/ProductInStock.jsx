import PropTypes from 'prop-types';
import DetailsTooltip from '../../Tooltips/DetailsTooltip';
import ProductDetails from './ProductDetails';
import ProductPrice from './ProductPrice';

const ProductInStock = ({ product, updateQuantity, removeFromCart }) => {
	return (
		<div className='swdc-flex swdc-flex-col md:swdc-flex-row swdc-w-full swdc-mb-4'>
			<ProductDetails product={product} />
			<div className='swdc-flex swdc-ml-2 md:swdc-ml-0 md:swdc-w-2/3 swdc-w-full'>
				<ProductPrice
					product={product}
					updateQuantity={updateQuantity}
					removeFromCart={removeFromCart}
				/>
				<div className='sm:swdc-border-none swdc-border-l swdc-border-[#e5e5e5] swdc-pr-6 md:swdc-pr-0 md:swdc-pl-0 sm:swdc-pr-8 swdc-pl-2'>
					<h3 className='swdc-text-[#026533] swdc-text-base swdc-font-bold'>
						In Stock
					</h3>
					<p className='swdc-text-[.8125rem]'>
						Most orders placed before Noon will be ready same day.
					</p>
					<DetailsTooltip
						text='Details'
						content='Wait until you receive a ready for pickup email before proceeding to the
            store. Orders placed outside of normal store hours or near store closing
            will be processed the next business day. Large volume orders may take
            additional time to prepare.'
					/>
				</div>
			</div>
		</div>
	);
};

ProductInStock.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired,
		quantity: PropTypes.number.isRequired,
		// Add any other required properties for ProductDetails
	}).isRequired,
	updateQuantity: PropTypes.func.isRequired,
	removeFromCart: PropTypes.func.isRequired,
};

export default ProductInStock;
