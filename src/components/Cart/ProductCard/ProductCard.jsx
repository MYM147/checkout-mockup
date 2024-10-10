import PropTypes from 'prop-types';
import ItemDetails from './ItemDetails';
import ItemStatus from './ItemStatus';
import ProductWarning from './ProductWarning';

const ProductCard = ({ selectedProduct }) => {
	return (
		<>
			{selectedProduct && (
				<div className='md:swdc-flex swdc-w-full swdc-mt-4 swdc-h-full'>
					<ItemDetails product={selectedProduct} />
					<ItemStatus />
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
