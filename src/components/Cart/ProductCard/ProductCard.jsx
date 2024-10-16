import PropTypes from 'prop-types';
import ProductDetails from './ProductDetails';
import ProductInStock from './ProductInStock';
import ProductWarning from './ProductWarning';

const ProductCard = ({ selectedProduct }) => {
	console.log('Product Card  ', selectedProduct);

	if (!selectedProduct) {
		return <div>No product selected</div>;
	}

	return (
		<>
			<div className='md:swdc-flex swdc-w-full swdc-mt-4 swdc-h-full'>
				<ProductDetails product={selectedProduct} />
				<ProductInStock />
			</div>
			<ProductWarning />
		</>
	);
};


ProductCard.propTypes = {
	selectedProduct: PropTypes.object,
};


export default ProductCard;
