import PropTypes from 'prop-types';
import ProductDetails from './ProductDetails';
import ProductInStock from './ProductInStock';
import ProductWarning from './ProductWarning';

const ProductCard = ({ selectedProduct }) => {
	return (
		<>
			{selectedProduct && (
				<div className='md:swdc-flex swdc-w-full swdc-mt-4 swdc-h-full'>
					<ProductDetails product={selectedProduct} />
					<ProductInStock />
				</div>
			)}
			<ProductWarning />
		</>
	);
};

// Add this line at the bottom of the file
ProductCard.propTypes = {
	selectedProduct: PropTypes.object,
};

export default ProductCard;
