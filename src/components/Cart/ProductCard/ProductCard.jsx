import ItemDetails from './ItemDetails';
import ItemStatus from './ItemStatus';
import ProductWarning from './ProductWarning';

const ProductCard = () => {
	return (
		<>
			<div className='md:swdc-flex swdc-w-full swdc-mt-4 swdc-h-full'>
				<ItemDetails />
				<ItemStatus />
			</div>
			<ProductWarning />
		</>
	);
};

export default ProductCard;
