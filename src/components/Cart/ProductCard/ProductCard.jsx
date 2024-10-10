import ItemDetails from './ItemDetails';
import ItemStatus from './ItemStatus';
import ProductWarning from './ProductWarning';

const ProductCard = (selectedProduct) => {
	return (
		<>
			<div className='md:swdc-flex swdc-w-full swdc-mt-4 swdc-h-full'>
				<ItemDetails selectedProduct={selectedProduct} />
				<ItemStatus />
			</div>
			<ProductWarning />
		</>
	);
};

export default ProductCard;
