import PropTypes from 'prop-types';
import ProductDetails from './ProductDetails';
import ProductInStock from './ProductInStock';
import ProductWarning from './ProductWarning';

const ProductCard = ({ selectedProduct }) => {

	console.log('Product Card  ', selectedProduct);

	return (
		<>
			{selectedProduct && (
				<div className='md:swdc-flex swdc-w-full swdc-mt-4 swdc-h-full'>
					<ProductDetails product={selectedProduct} />
					<ProductInStock />
					selectedProduct
				</div>
			)}
			<ProductWarning />
		</>
	);
};

// Add this line at the bottom of the file
ProductCard.propTypes = {
	selectedProduct: PropTypes.shape({
		id: PropTypes.number,
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


export default ProductCard;
